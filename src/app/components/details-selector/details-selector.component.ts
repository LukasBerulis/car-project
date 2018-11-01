import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TyreService} from '../../services/tyre.service';
import {Tyre} from '../../models/tyre';
import {Engine} from '../../models/engine';
import {EngineService} from '../../services/engine.service';

@Component({
  selector: 'app-details-selector',
  templateUrl: './details-selector.component.html',
  styleUrls: ['./details-selector.component.css']
})
export class DetailsSelectorComponent implements OnInit {
  tyres: Tyre[] = [];
  engines: Engine[] = [];
  @Output() tyreSelected = new EventEmitter<Tyre>();
  @Output() engineSelected = new EventEmitter<Engine>();

  constructor(private tyreService: TyreService, private engineService: EngineService) { }

  ngOnInit() {
    this.tyreService.getTyres().subscribe(tyres => {
      this.tyres = tyres;
    });
    this.engineService.getEngines().subscribe( engines => this.engines = engines);
  }

  onTyreClick(tyre: Tyre) {
    this.tyreSelected.emit(tyre);
  }

  onEngineClick(engine: Engine) {
    this.engineSelected.emit(engine);
  }
}
