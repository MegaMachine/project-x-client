import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AppService {

	constructor(
		private readonly httpClient: HttpClient,
		private readonly authService: AuthService,
	) { }

	signUpUser(login, password) {
		console.log({
			login,
			password,
		})
		return this.httpClient.post('http://localhost:3000/user/sign-up', {
			login,
			password,
		});
	}

	signInUser(login, password) {
		console.log({
			login,
			password,
		})
		return this.httpClient.post('http://localhost:3000/user/sign-in', {
			login,
			password,
		});
	}

	test() {
		let header;
		this.authService.authToken.next(window.localStorage.getItem('token'));
		console.log(this.authService.authToken.getValue());
		if (this.authService.authToken.getValue()) {
			header = {
				headers: new HttpHeaders().set('Authorization', window.localStorage.getItem('token'))
			};
		}
		console.log(header);
		return this.httpClient.get('http://localhost:3000/', header);
	}
}
