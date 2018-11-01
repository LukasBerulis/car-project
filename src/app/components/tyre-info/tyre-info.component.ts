import {Component, Input, OnInit} from '@angular/core';
import {Tyre} from '../../models/tyre';

@Component({
  selector: 'app-tyre-info',
  templateUrl: './tyre-info.component.html',
  styleUrls: ['./tyre-info.component.css']
})
export class TyreInfoComponent implements OnInit {
  @Input() tyre: Tyre;
  constructor() { }

  ngOnInit() {
  }

}
