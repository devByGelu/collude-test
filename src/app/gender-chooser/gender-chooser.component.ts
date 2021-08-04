import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/reducers';
import { GenderOptionsState } from '../store/reducers/genderOption.reducer';
import {
  SetNextGenderAction,
  SetPrevGenderAction,
} from '../store/actions/genderOption.action';

@Component({
  selector: 'app-gender-chooser',
  templateUrl: './gender-chooser.component.html',
  styleUrls: ['./gender-chooser.component.sass'],
})
export class GenderChooserComponent implements OnInit {
  // prevIndex$: Observable<number>;

  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    // this.nextIndex$ = this.store.select((store) => {
    //   const index = store.genderOptions.selected;
    //   const options = store.genderOptions.options;
    //   return (index === options.length - 1 && 0) || index + 1;
    // });
    // this.prevIndex$ = this.store.select((store) => {
    //   const index = store.genderOptions.selected;
    //   const options = store.genderOptions.options;
    //   return (index === 0 && options.length - 1) || index - 1;
    // });
  }
  next() {
    this.store.dispatch(new SetNextGenderAction());
  }
  prev() {
    this.store.dispatch(new SetPrevGenderAction());
  }
}
