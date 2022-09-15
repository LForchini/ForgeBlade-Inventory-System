import {
    Table,
    Column,
    Model,
    BelongsTo,
    ForeignKey,
} from "sequelize-typescript";
import Order from "./Order.model";

@Table
export default class Receipt extends Model {
    @Column
    amount!: number;

    @Column
    payment_date!: Date;

    @ForeignKey(() => Order)
    order_id!: number;

    @BelongsTo(() => Order)
    order!: Order;
}
