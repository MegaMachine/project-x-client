import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { JwtModule } from "@auth0/angular-jwt";
import { HeaderComponent } from './header/header/header.component';

const appRoutes = [
  { path: '', component: AuthComponent, },
  { path: 'chat', component: ChatComponent}
]

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ChatComponent,
    HeaderComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:3000"],
        blacklistedRoutes: ["localhost:3000/chat"]
      }
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
