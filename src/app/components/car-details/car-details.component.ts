import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../models/car';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CarService} from '../../services/car.service';
import {Tyre} from '../../models/tyre';
import {TyreService} from '../../services/tyre.service';
import {Engine} from '../../models/engine';
import {EngineService} from '../../services/engine.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  car: Car;
  tyre: Tyre;
  engine: Engine;
  showDetailsSelector = false;

  constructor(private route: ActivatedRoute, private router: Router,
              private carService: CarService,
              private tyreService: TyreService,
              private engineService: EngineService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id'); // id from URL
      this.carService.getCar(id).subscribe((car: Car) => {
        this.car = car;
        this.getTyre(this.car.tyreId);
        this.getEngine(this.car.engineId);
      });
    });
  }

  getTyre(tyreId: string) {
    this.tyreService.getTyre(tyreId).subscribe((tyre: Tyre) => {
        this.tyre = tyre;
        console.log('tyre found');
      },
      error => {
        this.tyre = new Tyre();
        console.log('tyre not found');
        this.tyre.name = 'Not selected';
        this.tyre.radius = 0;
        this.tyre.height = 0;
        this.tyre.width = 0;
      });
  }

  getEngine(engineId: string) {
    this.engineService.getEngine(engineId).subscribe((engine: Engine) => {
        this.engine = engine;
        console.log('tyre found');
      },
      error => {
        this.engine = new Engine();
        console.log('tyre not found');
        this.engine.name = 'Not selected';
        this.engine.power = 0;
        this.engine.size = 0;
      });
  }

  toggleDetailsSelector() {
    this.showDetailsSelector = !this.showDetailsSelector;
  }

  onTyreSelected(tyre: Tyre) {
    this.car.tyreId = tyre.id;
    this.tyre = tyre;
    this.carService.updateCar(this.car).subscribe();
  }

  onEngineSelected(engine: Engine) {
    this.car.engineId = engine.id;
    this.engine = engine;
    this.carService.updateCar(this.car).subscribe();
  }

  onBackClick() {
    this.router.navigate(['cars']);
  }

  getImageUrl(): string {
    return this.carService.getCarImageUrl(this.car.imageUrl);
  }
}
