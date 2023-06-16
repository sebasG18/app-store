import { ItemModel } from "src/app/core/models/item.interface";
import { createReducer,on } from "@ngrx/store";
import { LoadItems } from "src/app/state/actions/items.actions";
import { state } from "@angular/animations";
import { ItemState } from "src/app/state/actions/item.state";

export const initialState: ItemState ={ loading: false, items: []}

export const itemsReducer=createReducer(
    initialState,
    on(LoadItems, (state)=>{
        return {...state,loading: true}
    }),

);