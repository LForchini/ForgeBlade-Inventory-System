import { Router, Response } from "express";
import Job from "../models/Job.model";
import { getReasonPhrase, StatusCodes } from "http-status-codes";
import { Request, load_employee } from "../middleware";

const guard = require("express-jwt-permissions")();

export const router = Router();

router
    .route("/")
    .get(load_employee, async (req: Request, res: Response) => {
        let jobs: Job[];

        if (req.auth?.scope.admin) {
            jobs = await Job.findAll();
        } else {
            jobs = req.employee?.assigned_jobs || [];
        }

        res.send(jobs);
    })
    .post(guard.check("admin"), async (req: Request, res: Response) => {
        let { duration, state, order_id } = req.body;

        if (!duration || !state || !order_id) {
            res.status(StatusCodes.BAD_REQUEST).send({
                error: getReasonPhrase(StatusCodes.BAD_REQUEST),
                debug: `Malformed JSON payload: ${JSON.stringify(req.body)}`,
            });
            return;
        }
        let job = new Job({ duration, state, order_id });
        job = await job.save();
        res.status(StatusCodes.OK).send(job);
    });

router
    .route("/:id")
    .get(load_employee, async (req: Request, res: Response) => {
        let job = await Job.findByPk(req.params.id);

        // !job since job might be null and we don't want to leak that info.
        // if this ever gets confusing might change it since this is just
        // a demonstration/practice project
        if (
            !job ||
            (!req.auth?.scope.admin &&
                !req.employee?.assigned_jobs.includes(job))
        ) {
            res.status(StatusCodes.FORBIDDEN).send({
                error: getReasonPhrase(StatusCodes.FORBIDDEN),
                debug: `Employee does not have access to this job: ${req.employee}`,
            });
            return;
        }

        res.status(StatusCodes.OK).send(job);
    })
    .patch(guard.check("admin"), async (req: Request, res: Response) => {
        let job = await Job.findByPk(req.params.id);

        if (!job) {
            res.status(StatusCodes.NOT_FOUND).send({
                error: getReasonPhrase(StatusCodes.NOT_FOUND),
                debug: `Could not find job with PK: ${req.params.id}`,
            });
            return;
        }

        let { duration, state, materials, logs, assigned_to, order_id, order } =
            req.body;

        job.duration = duration ?? job.duration;
        job.state = state ?? job.state;
        job.materials = materials ?? job.materials;
        job.logs = logs ?? job.logs;
        job.assigned_to = assigned_to ?? job.assigned_to;
        job.order_id = order_id ?? job.order_id;
        job.order = order ?? job.order;

        job = await job.save();

        res.status(StatusCodes.OK).send(job);
    })
    .delete(guard.check("admin"), async (req: Request, res: Response) => {
        let job = await Job.findByPk(req.params.id);

        if (!job) {
            res.status(StatusCodes.NOT_FOUND).send({
                error: getReasonPhrase(StatusCodes.NOT_FOUND),
                debug: `Could not find job with PK: ${req.params.id}`,
            });
            return;
        }
        await job.destroy();
        res.sendStatus(StatusCodes.NO_CONTENT);
    });
