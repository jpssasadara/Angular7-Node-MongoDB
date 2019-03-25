import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  { path: 'sasa', component: UpdateStudentComponent},
  { path: 'updatestudent/:id1/:id2/:id3/:id4/:id5/:id6/:id7', component: UpdateStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UpdateStudentComponent]
