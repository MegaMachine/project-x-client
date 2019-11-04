import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(
		private router: Router,
	) {
		if (this.auth) {
			this.router.navigate(['chat']);
		}
	}

	auth = window.localStorage.getItem('token');

}
