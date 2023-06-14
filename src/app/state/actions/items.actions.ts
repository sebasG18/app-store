import { createAction } from '@ngrx/store';
import { ItemModel } from 'src/app/core/models/item.interface';
import { props } from '@ngrx/store';
 
export const LoadItems = createAction(
 "[Item List] load items"
 );

 export const LoadedItems=createAction(
    "[Item List] loaded success",
    props<{items:ItemModel}>()
 )
 