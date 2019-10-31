import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AppService {

	constructor(
		private readonly httpClient: HttpClient,
	) { }

	signUpUser(login, password) {
		console.log({
			login,
			password,
		})
		return this.httpClient.post('http://localhost:3000/auth/sign-up', {
			login,
			password,
		});
	}

	signInUser(login, password) {
		console.log({
			login,
			password,
		})
		return this.httpClient.post('http://localhost:3000/auth/sign-in', {
			login,
			password,
		});
	}
}
