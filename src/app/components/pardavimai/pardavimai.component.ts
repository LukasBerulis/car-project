import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pardavimai',
  templateUrl: './pardavimai.component.html',
  styleUrls: ['./pardavimai.component.css']
})
export class PardavimaiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onPerziuretiSarasaClick() {
    this.router.navigate(['/perziuretiSarasa']);
  }

  onPerziuretiUzsakymusClick() {
    this.router.navigate(['/uzsakymuPerziura']);
  }

  onApmoketiClick() {
    this.router.navigate(['/apmokejimas']);
  }
}
