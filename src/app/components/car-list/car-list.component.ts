import {Component, OnInit} from '@angular/core';
import {CarService} from '../../services/car.service';
import {Car} from '../../models/car';
import {Router} from '@angular/router';
import {Tyre} from '../../models/tyre';
import {TyreService} from '../../services/tyre.service';
import {Engine} from '../../models/engine';
import {EngineService} from '../../services/engine.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];
  tyres: Tyre[] = [];
  engines: Engine[] = [];

  newCar: Car = new Car();

  constructor(private carService: CarService, private router: Router,
              private tyreService: TyreService,
              private engineServie: EngineService) {
  }

  ngOnInit() {
    this.carService.getCars().subscribe(cars => {
        this.cars = cars;
        console.log(cars)
      },
      error => {
        console.log(error);
      });
  }

  addNewCar(car: Car) {
    this.carService.addCar(car).subscribe((carId: number) => {
        car.id = carId;
        this.cars.push(car);
      });
  }

  addNewTyre(tyre: Tyre) {
    this.tyreService.addTyre(tyre).subscribe( (tyreId: number) => {
        tyre.id = tyreId.toString();
        this.tyres.push(tyre);
      });
  }

  addNewEngine(engine: Engine) {
    this.engineServie.addEngine(engine).subscribe( (engineId: number) => {
      engine.id = engineId.toString();
      this.engines.push(engine);
    });
  }

  onCarRowClick(car: Car) {
    this.router.navigate(['/cars', car.id]);
  }

}
