import { NgModule } from '@angular/core'
import { MatButtonModule, MatCheckboxModule } from '@angular/material'
import { MatMenuModule } from '@angular/material/menu'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { MainviewComponent } from './mainview/mainview.component'
import { MenubarComponent } from './menubar/menubar.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenubarComponent,
    LoginComponent,
    MainviewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
