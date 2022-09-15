import { Table, Column, Model, HasMany } from "sequelize-typescript";
import StockRequest from "./StockRequest.model";

export enum Material {}

@Table
export default class Stock extends Model {
    @Column
    material!: Material;

    @Column
    quantity!: number;

    @HasMany(() => StockRequest)
    requests!: StockRequest;
}
