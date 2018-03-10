import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

export class Seat {
	id: number;
	section: string;
	selected: boolean;
	special: boolean;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

	img_seat: string = "../assets/seat.png";
	img_handicapped: string = "../assets/wheelchair.png";

	sections: string[] = [
		"1",
		"2",
	];

	selected: Seat[] = [];

	seats: Seat[] = [
		{
			id: 1,
			section: "1",
			selected: false,
			special: false
		},
		{
			id: 2,
			section: "1",
			selected: false,
			special: false
		},
		{
			id: 8675309,
			section: "2",
			selected: false,
			special: true
		},
		{
			id: 4,
			section: "2",
			selected: false,
			special: false
		},
	]

	constructor(private fb: FormBuilder) {}

	public updatePrice(): void {
		console.log(this.selected);

		for (var seat in this.selected) {
			console.log(seat);
		}
	}

	public seatClick(event: any): void {
		let id = event.explicitOriginalTarget.id;
		let seat = this.seats.filter((s) => s.id == id)[0];

		if(seat.selected) {
			seat.selected = false;
			this.selected.splice(this.selected.indexOf(seat), 1);
		} else {
			seat.selected = true;
			this.selected.push(seat);
		}

		//console.log(this.selected);
		this.updatePrice();
	}

	ngOnInit() {

	}
}

