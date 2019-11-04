import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from '../auth/auth.service';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

	private auth;
	private name;
	private chatContent;

	constructor(
		private appService: AppService,
		private httpClient: HttpClient,
		private authService: AuthService,
	) {
		this.auth = this.authService.authToken.getValue();
	}

	ngOnInit() {
		console.log(window.localStorage.getItem('token'))

		this.httpClient.get('http://localhost:3000/user/me')
			.subscribe(
				(res) => {
					console.log(res);
				},
				() => {

				}
			);
	}


}
