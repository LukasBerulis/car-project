import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Engine} from '../../models/engine';
import {EngineService} from '../../services/engine.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-engine-input',
  templateUrl: './engine-input.component.html',
  styleUrls: ['./engine-input.component.css']
})
export class EngineInputComponent implements OnInit {

  engine: Engine = new Engine();
  @Output() submitButtonClick = new EventEmitter<Engine>();

  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    let engineToEmit = new Engine();
    engineToEmit.name = this.engine.name;
    engineToEmit.power = this.engine.power;
    engineToEmit.size = this.engine.size;
    this.submitButtonClick.emit(engineToEmit);
  }

  onSubmit(form: NgForm) {
    form.resetForm();
  }
}
