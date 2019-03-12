import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { KeypadComponent } from './keypad/keypad.component';

const routes: Routes = [
 

  {path:"login", component:LoginComponent},
  { path : "gallery" , component : GalleryComponent},
  { path : "keypad" , component:KeypadComponent},
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 }
