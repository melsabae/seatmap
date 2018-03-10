import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

export class Seat {
	id: number;
	section: string;
	selected: boolean; // image switch
	sold: boolean; // disable the control
	ha: boolean; // handicapped accessible
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

	// seat sold icon
	ssi: string = "../assets/ssi.png";
	// regular unselected seat
	rsu: string = "../assets/rsu.png";
	// regular selected seat
	rss: string = "../assets/rss.png";
	// handicapped acessible unselected
	hsu: string = "../assets/hsu.png";
	// handicapped acessible selected
	hss: string = "../assets/hss.png"

	sections: string[] = [
		"1",
		"2",
	];

	sel: Seat[] = [];

	seats: Seat[] = [
		{
			id: 1,
			section: "1",
			selected: false,
			ha: false,
			sold: true
		},
		{
			id: 2,
			section: "1",
			selected: false,
			sold: false,
			ha: false
		},
		{
			id: 8675309,
			section: "2",
			selected: false,
			sold: false,
			ha: true
		},
		{
			id: 4,
			section: "2",
			selected: false,
			sold: false,
			ha: false
		},
	]

	constructor(private fb: FormBuilder) {}

	public updatePrice(): void {
		console.log(this.sel);
	}

	public seatClick(event: any): void {
		let id = event.explicitOriginalTarget.id;
		let seat = this.seats.filter((s) => s.id == id)[0];

		if(seat.selected) {
			seat.selected = false;
			this.sel.splice(this.sel.indexOf(seat), 1);
		} else {
			seat.selected = true;
			this.sel.push(seat);
		}

		//console.log(this.sel);
		this.updatePrice();
	}

	ngOnInit() {

	}
}

