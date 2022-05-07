import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { GalleryComponent } from './gallery/gallery.component';

import { RouterModule, Routes } from '@angular/router';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { FormsModule } from '@angular/forms';
import { NewtaskComponent } from './newtask/newtask.component';

const routes:Routes = [
  {path: '', redirectTo: '/gallery', pathMatch: 'full'},
  {path: 'gallery', component: GalleryComponent},
  {path: 'task/:id', component: TaskdetailComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    GalleryComponent,
    TaskdetailComponent,
    NewtaskComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
