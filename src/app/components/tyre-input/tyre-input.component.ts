import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tyre} from "../../models/tyre";
import {NgForm} from "@angular/forms";
import {TyreService} from '../../services/tyre.service';

@Component({
  selector: 'app-tyre-input',
  templateUrl: './tyre-input.component.html',
  styleUrls: ['./tyre-input.component.css']
})
export class TyreInputComponent implements OnInit {

  tyre: Tyre = new Tyre();
  @Output() submitButtonClick = new EventEmitter<Tyre>();

  constructor(private tyreService: TyreService) { }

  ngOnInit() {
  }

  onButtonClick() {
    let tyreToEmit = new Tyre();
    tyreToEmit.name = this.tyre.name;
    tyreToEmit.width = this.tyre.width;
    tyreToEmit.height = this.tyre.height;
    tyreToEmit.radius = this.tyre.radius;
    // this.tyreService.addTyre(tyreToEmit).subscribe();
    this.submitButtonClick.emit(tyreToEmit);
  }

  onSubmit(form: NgForm) {
    form.resetForm();
  }
}
