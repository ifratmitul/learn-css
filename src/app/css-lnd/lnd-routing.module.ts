import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MixBlendComponent } from './mix-blend/mix-blend.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'mix-blend', component: MixBlendComponent},
  {path: '**', redirectTo:'', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LndRoutingModule { }
