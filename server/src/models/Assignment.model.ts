import { ForeignKey, Model, Table } from "sequelize-typescript";
import Employee from "./Employee.model";
import Job from "./Job.model";

@Table
export default class Assignment extends Model {
    @ForeignKey(() => Employee)
    employee_id!: number;

    @ForeignKey(() => Job)
    job_id!: number;
}
