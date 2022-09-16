import { Router, Response } from "express";
import { getReasonPhrase, StatusCodes } from "http-status-codes";
import { Request, load_employee } from "../middleware";
import Employee from "../models/Employee.model";

const guard = require("express-jwt-permissions")();

export const router = Router();

router
    .route("/")
    .get(load_employee, async (req: Request, res: Response) => {
        let employees: Employee[];
        if (req.auth?.scope.admin) {
            employees = await Employee.findAll();
        } else {
            employees = [req.employee as Employee];
        }

        res.status(StatusCodes.OK).send(employees);
    })
    .post(guard.check("admin"), async (req: Request, res: Response) => {
        let { forename, surname, date_of_birth, email, role } = req.body;

        if (!forename || !surname || !date_of_birth || !email || !role) {
            res.status(StatusCodes.BAD_REQUEST).send({
                error: getReasonPhrase(StatusCodes.BAD_REQUEST),
                debug: `Missing required fields: [forname|surname|date_of_birth|email|role]+`,
            });
            return;
        }

        let employee = new Employee({
            forename,
            surname,
            date_of_birth,
            email,
            role,
        });
        employee = await employee.save();

        res.status(StatusCodes.OK).send(employee);
    });

router
    .route("/:id")
    .get(load_employee, async (req: Request, res: Response) => {
        if (req.employee && req.employee.id === req.params.id) {
            res.status(StatusCodes.OK).send(req.employee);
            return;
        }

        if (!req.auth?.scopes.admin) {
            res.status(StatusCodes.FORBIDDEN).send({
                error: getReasonPhrase(StatusCodes.FORBIDDEN),
                debug: `Can only access own information: ${req.employee}`,
            });
            return;
        }

        let employee = await Employee.findByPk(req.params.id);

        if (!employee) {
            res.status(StatusCodes.NOT_FOUND).send({
                error: getReasonPhrase(StatusCodes.NOT_FOUND),
                debug: `Cannot find employee with id: ${req.params.id}`,
            });
            return;
        }

        res.status(StatusCodes.OK).send(employee);
    })
    .patch(guard.check("admin"), async (req: Request, res: Response) => {})
    .delete(guard.check("admin"), async (req: Request, res: Response) => {});
