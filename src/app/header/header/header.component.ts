import { Component, OnInit } from '@angular/core';
import { AuthComponent } from 'src/app/auth/auth.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	private auth;

	constructor(
		private router: Router,
	) {
		this.auth = window.localStorage.getItem('token');
	}

	ngOnInit() {
	}

	logout() {
		this.auth = window.localStorage.removeItem('token');
		this.router.navigate(['']);
	}

}
