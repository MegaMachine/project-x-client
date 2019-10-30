import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	title = 'client';

	constructor(
		private readonly appService: AppService,
	) { }

	ngOnInit() {
	}

	auth(login: string, password: string) {
		const res = this.appService.auth(login, password);

		if (typeof res === 'string') {
			window.localStorage.setItem('token', JSON.stringify('Bearer' + res));
		}
	}

}
