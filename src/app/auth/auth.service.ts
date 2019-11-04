import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	authToken = new BehaviorSubject(window.localStorage.getItem('token'));

	constructor() {

	}

}
