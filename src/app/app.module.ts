import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReadComponentComponent } from './read-component/read-component.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { DeleteComponentComponent } from './delete-component/delete-component.component';
import { CrudService } from './crud.service';
import { GenderValidateDirective } from './gender-validate.directive';

@NgModule({
  declarations: [
    AppComponent,    
    ReadComponentComponent,
    UpdateComponentComponent,
    DeleteComponentComponent,
    GenderValidateDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
