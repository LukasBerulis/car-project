import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-naudotojai',
  templateUrl: './naudotojai.component.html',
  styleUrls: ['./naudotojai.component.css']
})
export class NaudotojaiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSlaptazodisClick() {
    this.router.navigate(['/pasikeistiSlaptazodi']);
  }

  onNaudotojaiClick() {
    this.router.navigate(['/naudotojuSarasas']);
  }

  onSusisiektiClick() {
    this.router.navigate(['/susisiekti']);
  }
}
