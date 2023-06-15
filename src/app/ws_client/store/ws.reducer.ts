import { ItemModel } from "src/app/core/models/item.interface";
import { createReducer,on } from "@ngrx/store";
import { LoadItems } from "src/app/state/actions/items.actions";
import { state } from "@angular/animations";

export const initialState: {
    loading: boolean,
    items: ReadonlyArray<ItemModel>;
}={ loading: false, items: []}

export const itemsReducer=createReducer(
    initialState,
    on(LoadItems, (state)=>{
        return {...state,loading: true}
    }),

);