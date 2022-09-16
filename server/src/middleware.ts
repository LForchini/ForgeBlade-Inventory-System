import { Request as JWTRequest } from "express-jwt";
import Employee from "./models/Employee.model";
import { Response, NextFunction } from "express";
import { getReasonPhrase, StatusCodes } from "http-status-codes";

export type Request = JWTRequest & { employee?: Employee };

/**
 * Middleware to load an employee into the request. Uses the `sub`
 * param in the JWT token header to determine which employee to load.
 * Sends errors if there is no `sub` header or no valid employee.
 * @param req
 * @param res
 * @param next
 * @returns
 */
export async function load_employee(
    req: Request,
    res: Response,
    next: NextFunction
) {
    let sub = req.auth?.sub;

    if (!sub) {
        res.status(StatusCodes.BAD_REQUEST).send({
            error: getReasonPhrase(StatusCodes.BAD_REQUEST),
            debug: `Could not find valid sub JWT header: ${sub}`,
        });
        return;
    }

    let employee = await Employee.findOne({ where: { sub } });

    if (!employee) {
        res.status(StatusCodes.BAD_REQUEST).send({
            error: getReasonPhrase(StatusCodes.BAD_REQUEST),
            debug: `Could not find employee with sub ${sub}`,
        });
        return;
    }

    req.employee = employee;

    next();
}
