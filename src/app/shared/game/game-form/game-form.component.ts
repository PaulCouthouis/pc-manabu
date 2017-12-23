import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'mnb-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {
  form = new FormGroup({
    on: new FormControl(),
    kon: new FormControl(),
    translation: new FormControl()
  });

  get value() {
    return this.form.value;
  }

  constructor() {}

  ngOnInit() {
    console.log(this.form);
  }
}
