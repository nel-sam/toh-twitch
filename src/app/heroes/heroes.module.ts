import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDataService } from './hero-data.service';
import { MatListModule } from '@angular/material';

@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    MatListModule,
    HeroesRoutingModule,
  ],
  providers: [HeroDataService]
})
export class HeroesModule { }
