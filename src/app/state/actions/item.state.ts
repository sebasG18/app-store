import { ItemModel } from "src/app/core/models/item.interface";
export interface ItemState{
    loading:boolean,
    items: ReadonlyArray<ItemModel>;
}