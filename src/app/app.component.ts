import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadItems } from './state/actions/items.actions';
import { Observable } from 'rxjs';
import { selectListItems, selectLoading } from './state/actions/items.selectors';
import { ShowCaseService } from './state/actions/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-store';
  loading$:Observable<boolean>=new Observable()
  constructor(
    private store:Store<any>,
    private ShowCaseService:ShowCaseService ){

  }
  ngOnInit(): void {
    this.loading$=this.store.select(selectLoading)
    this.store.dispatch(LoadItems())
  }
}
