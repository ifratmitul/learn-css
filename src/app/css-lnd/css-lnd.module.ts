import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MixBlendComponent } from './mix-blend/mix-blend.component';
import { LndRoutingModule } from './lnd-routing.module';
import { StripeTextComponent } from './stripe-text/stripe-text.component';



@NgModule({
  declarations: [
    HomeComponent,
    MixBlendComponent,
    StripeTextComponent
  ],
  imports: [
    CommonModule,
    LndRoutingModule
  ]
})
export class CssLndModule { }
