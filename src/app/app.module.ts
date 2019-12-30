import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/start.component';

@NgModule({
  //  these are for componets i make
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent
  ],
  //  3rd party components/modules
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
