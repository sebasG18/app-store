import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map,mergeMap,catchError } from "rxjs/operators";
import { ShowCaseService } from "src/app/state/actions/store.service";
@Injectable()
export class ItemsEffects{
LoadItems$= createEffect(() =>
    this.actions$.pipe(
        ofType("[Item List] Load items "),
        mergeMap(() => this.ShowCaseService.getDataApi()
        .pipe(
           map(items =>({type:"[Item List] Loaded succes",items})),
           catchError(()=>EMPTY)
        )
            
        )
    )
);


    constructor(
        private actions$:Actions,
        private ShowCaseService:ShowCaseService

    ){ }
}