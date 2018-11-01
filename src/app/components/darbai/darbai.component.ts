import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-darbai',
  templateUrl: './darbai.component.html',
  styleUrls: ['./darbai.component.css']
})
export class DarbaiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onPridetiClick() {
    this.router.navigate(['/pridetiDarba']);
  }

  onPasalintiClick() {
    this.router.navigate(['/pasalintiDarba']);
  }

  onRedaguotiClick() {
    this.router.navigate(['/redaguotiDarba']);
  }

  onRedaguotiIvertiClick() {
    this.router.navigate(['/redaguotiDarboIverti']);
  }

  onDarbasClick() {
    this.router.navigate(['/vykdomasDarbas']);
  }
}
