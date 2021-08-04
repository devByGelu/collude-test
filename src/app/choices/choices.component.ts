import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/reducers';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.sass'],
})
export class ChoicesComponent implements OnInit {
  options$: Observable<{ label: string }[]>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.options$ = this.store.select((store) => {
      const index = store.genderOptions.selected;
      const options = store.genderOptions.options;

      return [
        options[(index === 0 && options.length - 1) || index - 1],
        options[index],
        options[index === options.length - 1 ? 0 : index + 1],
      ];
    });
  }
}
