import {
    Table,
    Column,
    Model,
    HasMany,
    BelongsTo,
    ForeignKey,
} from "sequelize-typescript";
import Employee from "./Employee.model";
import Job from "./Job.model";

@Table
export default class Log extends Model {
    @ForeignKey(() => Employee)
    employee_id!: number;

    @BelongsTo(() => Employee)
    employee!: Employee;

    @ForeignKey(() => Job)
    job_id!: number;

    @BelongsTo(() => Job)
    job!: Job;

    @Column
    start_time!: Date;

    @Column
    end_time!: Date;
}
