import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tiekejai',
  templateUrl: './tiekejai.component.html',
  styleUrls: ['./tiekejai.component.css']
})
export class TiekejaiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onVaztarasciaiClick() {
    this.router.navigate(['/vaztarasciai']);
  }

  onReikiamosClick() {
    this.router.navigate(['/reikiamosDetales']);
  }

  onPridetiTiekeja() {
    this.router.navigate(['/pridetiTiekeja']);
  }

  onRedaguotiSalintiClick() {
    this.router.navigate(['/redaguotiTiekeja']);
  }

  onNeapmoketiPavedimaiClick() {
    this.router.navigate(['/neapmoketiPavedimai']);
  }
}
