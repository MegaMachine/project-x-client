import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class AppService {

	constructor(
		private readonly httpClient: HttpClient,
	) { }

	auth(login, password) {
		console.log('AppService: ', login.value, password.value)
		this.httpClient.post('http://localhost:3000/auth/sign-up', {
			login: login.value,
			password: password.value,
		}).subscribe(
			(response: string) => {
				// const res = JSON.parse(response);
				console.log(response);
			},
			(error) => {
				console.log(error.error.text)

				throw new Error(error.error.text);
			}
		)
	}
}
