import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {path: '', component: IndexComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent, pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent, pathMatch: 'full'},
  {path: 'cv', component: CvComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
