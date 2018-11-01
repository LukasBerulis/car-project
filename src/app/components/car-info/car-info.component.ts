import {Component, Input, OnInit} from '@angular/core';
import {Engine} from '../../models/engine';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {
  @Input() engine: Engine;
  constructor() { }

  ngOnInit() {
  }

}
