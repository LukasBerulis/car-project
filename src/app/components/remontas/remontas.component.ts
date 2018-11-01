import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-remontas',
  templateUrl: './remontas.component.html',
  styleUrls: ['./remontas.component.css']
})
export class RemontasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onUzrasasClick() {
    this.router.navigate(['/pridetiUzrasa']);
  }

  onRezervacijaClick() {
    this.router.navigate(['/irankioRezervarcija']);
  }

  onVeiksmasClick() {
    this.router.navigate(['/pridetiRemontoVeiksma']);
  }

  onUzsakymasClick() {
    this.router.navigate(['/pridetiDetalesUzsakyma']);
  }

  onInstrukcijosClick() {
    this.router.navigate(['/instrukcijos']);
  }

  onRezervuotiVizitaClick() {
    this.router.navigate(['/remontoRezervacija']);
  }
}
