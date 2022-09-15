import {
    Table,
    Column,
    Model,
    HasMany,
    DataType,
    BelongsToMany,
    ForeignKey,
} from "sequelize-typescript";
import Assignment from "./Assignment.model";
import Job from "./Job.model";
import Log from "./Log.model";

export enum Role {
    WORKER,
    HR,
    ADMIN,
}

@Table
export default class Employee extends Model {
    @Column
    forename!: string;

    @Column
    surname!: string;

    get name(): string {
        return `${this.surname}, ${this.forename}`;
    }

    @Column
    date_of_birth!: Date;

    @Column
    email!: string;

    @Column
    role!: Role;

    @HasMany(() => Log)
    logs!: Log[];

    @ForeignKey(() => Job)
    private _job_id!: number;

    @BelongsToMany(() => Job, () => Assignment)
    assigned_jobs!: Job[];
}
