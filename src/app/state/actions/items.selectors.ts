import { AppState } from "src/app/state/actions/app.state";
import { createSelector } from "@ngrx/store";
import { ItemState } from "src/app/state/actions/item.state";
export const selectItemsFeature = (state:AppState)=> state.items;

export const selectListItems = createSelector (
    selectItemsFeature,
    (state:ItemState)=> state.items
);
export const selectLoading = createSelector (
    selectItemsFeature,
    (state:ItemState)=> state.loading
);