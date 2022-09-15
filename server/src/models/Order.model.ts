import { Table, Column, Model, BelongsTo, HasOne } from "sequelize-typescript";
import Job from "./Job.model";
import Receipt from "./Receipt.model";

@Table
export default class Order extends Model {
    @Column
    quantity!: number;

    @Column
    order_date!: Date;

    @Column
    collection_date!: Date;

    @HasOne(() => Receipt)
    receipt!: Receipt | null;

    @HasOne(() => Job)
    job!: Job;
}
