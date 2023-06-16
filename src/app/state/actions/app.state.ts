import { itemsReducer } from "src/app/ws_client/store/ws.reducer";
import { ItemState } from "./item.state";
import { ActionReducerMap } from "@ngrx/store";
export interface AppState{
    items:ItemState ;
   
}
export const ROO_REDUCERS:ActionReducerMap<AppState> ={
    
        items:itemsReducer,
        
}