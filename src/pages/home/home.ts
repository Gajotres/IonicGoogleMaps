import { Component } from '@angular/core';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	map: any;

	constructor() {

	}

	ionViewDidLoad(){
		this.initializeMap();
	}

	initializeMap() {

		let locationOptions = {timeout: 20000, enableHighAccuracy: true};

		navigator.geolocation.getCurrentPosition(

			(position) => {

				let options = {
				  center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
				  zoom: 16,
				  mapTypeId: google.maps.MapTypeId.ROADMAP
				}

				this.map = new google.maps.Map(document.getElementById("map_canvas"), options);
			},

			(error) => {
				console.log(error);
			}, locationOptions
		);
	} 	
}
