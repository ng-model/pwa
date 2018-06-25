import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';

const routes: Routes = [
  { path: 'dashboard', component: OneComponent},
  { path: 'home', component: TwoComponent},
  { path: 'contact', component: ThreeComponent},
  { path: 'other', component: FourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
