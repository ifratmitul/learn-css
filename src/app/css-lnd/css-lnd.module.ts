import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MixBlendComponent } from './mix-blend/mix-blend.component';
import { LndRoutingModule } from './lnd-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    MixBlendComponent
  ],
  imports: [
    CommonModule,
    LndRoutingModule
  ]
})
export class CssLndModule { }
