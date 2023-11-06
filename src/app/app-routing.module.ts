import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { TodoComponent } from './todo/todo.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
