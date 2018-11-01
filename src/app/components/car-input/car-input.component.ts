import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Car} from '../../models/car';
import {NgForm} from '@angular/forms';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {FileUploadResult} from '../../models/file-upload-result';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-car-input',
  templateUrl: './car-input.component.html',
  styleUrls: ['./car-input.component.css']
})
export class CarInputComponent implements OnInit {

  @Input() buttonText: string;

  @Input() car: Car;

  @Output() submitButtonClick = new EventEmitter<Car>();

  private image: File;
  constructor(private carService: CarService) {
  }

  ngOnInit() {
  }

  onButtonClick() {
    const carToEmit = new Car();
    carToEmit.model = this.car.model;
    carToEmit.otherInformation = this.car.otherInformation;
    carToEmit.imageUrl = this.car.imageUrl;
    this.submitButtonClick.emit(carToEmit);
  }

  onSubmit(form: NgForm) {
    form.resetForm();
    this.image = null;
  }

  onFileChange(event) {
    const files = event.srcElement.files;
    if (files != null) {
      this.image = files[0];
      console.log(this.image);
    }
  }

  uploadImage() {
    if (this.image === null) { return; }
    this.carService.uploadFile(this.image).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        const percentDone = Math.round(100 * event.loaded / event.total);
        console.log(`File is ${percentDone}% uploaded.`);
      } else if (event instanceof HttpResponse) {
        if (event.ok) {
          console.log('File is completely uploaded!');
          console.log(event.body);
          const uploadResult = event.body as FileUploadResult;
          this.car.imageUrl = uploadResult.fileName;
        } else {
          console.log('File upload failed!');
        }
      }
    });
  }
}
