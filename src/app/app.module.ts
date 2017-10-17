import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RoutingModule } from './routing.module';

// Components
import { AppComponent } from './app/app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { AboutComponent } from './about/about.component';

// Services
import { ContentService } from './services/content.service';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RoutingModule
  ],
  providers: [ ContentService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
