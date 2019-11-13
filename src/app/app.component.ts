import { Component, OnInit } from '@angular/core';
import { Car } from './domain/car';
import { CarService } from './services/carservice';
import { UserService } from './user.service';

export class PrimeCar implements Car {
    constructor(public vin?, public year?, public brand?, public color?) {}
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CarService]
})
export class AppComponent implements OnInit {
    title = 'demo131';
    users: any;

    displayDialog: boolean;

    car: Car = new PrimeCar();

    selectedCar: Car;

    newCar: boolean;

    cars: Car[];

    cols: any[];

    constructor(private carService: CarService,
        protected userService: UserService) { }

    ngOnInit() {
        this.userService.getUsers()
        .subscribe(
          (data) => { // Success
            this.users = data
          },
          (error) => {
            console.error(error);
          }
        );
        this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            { field: 'vin', header: 'ID' },
            { field: 'year', header: 'Nombre del Producto' },
            { field: 'brand', header: 'Características' },
            { field: 'lanzamiento', header: 'Fecha de lanzamiento' },
            { field: 'fabricante', header: 'Correo fabricante' },
            { field: 'fabricacion', header: 'País de fabricación' },

            { field: 'moneda', header: 'Precio en formato de moneda' },

            { field: 'disponibles', header: 'Unidades disponibles' },

            { field: 'vendidas', header: 'Unidades vendidas' },

            { field: 'imagen', header: 'Imagen del producto' }

        ];
        // a.	ID 
// b.	Nombre del Producto 
// c.	Características (campo tipo texto) 
// d.	Fecha de lanzamiento 
// e.	Correo fabricante 
// f.	País de fabricación 
// i.	Usar el siguiente servicio (https://restcountries.eu/#api-endpoints-response-example ) u otro en desde internet 
 
// g.	Precio en formato de moneda 
// h.	Unidades disponibles 
// i.	Unidades vendidas 
// j.	Imagen del producto 

    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }

    save() {
        const cars = [...this.cars];
        if (this.newCar) {
            cars.push(this.car);
        } else {
            cars[this.findSelectedCarIndex()] = this.car;
        }
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        const index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val, i) => i !== index);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = {...event.data};
        this.displayDialog = true;
    }

    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}
