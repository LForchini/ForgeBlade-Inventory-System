import { Router, Response } from "express";
import { Request } from "express-jwt";
import Job from "../models/Job.model";

export const router = Router();

router
    .route("/")
    .get(async (req: Request, res: Response) => {})
    .post(async (req: Request, res: Response) => {});

router
    .route("/:id")
    .get(async (req: Request, res: Response) => {})
    .patch(async (req: Request, res: Response) => {})
    .delete(async (req: Request, res: Response) => {});
