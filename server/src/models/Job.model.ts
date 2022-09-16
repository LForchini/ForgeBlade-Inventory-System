import {
    Table,
    Column,
    Model,
    HasMany,
    BelongsTo,
    ForeignKey,
} from "sequelize-typescript";
import Employee from "./Employee.model";
import Log from "./Log.model";
import Order from "./Order.model";
import StockRequest from "./StockRequest.model";

export enum JobState {
    TO_DO,
    IN_PROGRESS,
    DONE,
}

@Table
export default class Job extends Model {
    @Column
    duration!: number;

    @Column
    state!: JobState;

    @HasMany(() => StockRequest)
    materials!: StockRequest[];

    @HasMany(() => Log)
    logs!: Log[];

    @HasMany(() => Employee)
    assigned_to!: Employee[];

    @ForeignKey(() => Order)
    order_id!: number;

    @BelongsTo(() => Order)
    order!: Order;
}
