import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadComponentComponent } from './read-component/read-component.component';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { DeleteComponentComponent } from './delete-component/delete-component.component';


const routes: Routes = [
  {path: 'read-component', component: ReadComponentComponent},
  {path: 'update-component', component: UpdateComponentComponent},
  {path: 'delete-component/:id', component: DeleteComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
