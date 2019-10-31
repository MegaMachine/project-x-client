import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

	title = 'client';
	signInUp = false;

	constructor(
		private readonly appService: AppService,
	) { }

	ngOnInit() {
	}

	signInOrUp(login, password) {
		let result;
		if (this.signInUp) {
			this.appService.signInUser(login.value, password.value)
				.subscribe(
					(res) => {
						result = res;
						console.log('sign-in res:', result);
						if (result && result.status && result.data.token) {
							window.localStorage.setItem('token', 'Bearer ' + result.data.token);
						}
					},
					(err) => {
						result = err;
						console.log('sign-in res:', result);
					}
				);
		} else {
			this.appService.signUpUser(login.value, password.value)
				.subscribe(
					(res) => {
						result = res;
						console.log('sign-up res:', result);
					},
					(err) => {
						result = err;
						console.log('sign-up res:', result);
					}
				);
		}
	}

	checkSignInUp(sign) {
		this.signInUp = sign.checked;
	}

}
