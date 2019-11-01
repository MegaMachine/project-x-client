import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AppService {
	private authToken = window.localStorage.getItem('token');

	constructor(
		private readonly httpClient: HttpClient,
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
		this.authToken = window.localStorage.getItem('token');
		if (this.authToken) {
			header = {
				headers: new HttpHeaders().set('Authorization', window.localStorage.getItem('token'))
			};
		}
		console.log(header);
		return this.httpClient.get('http://localhost:3000/', header);
	}
}
