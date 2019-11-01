import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

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
	) {
		this.auth  = this.appService.authToken.getValue();
	}

	ngOnInit() {
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
