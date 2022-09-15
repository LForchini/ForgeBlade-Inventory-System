import {
    Table,
    Column,
    Model,
    BelongsTo,
    ForeignKey,
} from "sequelize-typescript";
import Job from "./Job.model";
import Stock from "./Stock.model";

@Table
export default class StockRequest extends Model {
    @BelongsTo(() => Stock)
    stockpile!: Stock;

    @Column
    quantity!: number;

    @ForeignKey(() => Job)
    job_id!: number;

    @BelongsTo(() => Job)
    job!: Job;

    @ForeignKey(() => Stock)
    stock_id!: number;

    @BelongsTo(() => Stock)
    stock!: Stock;
}
