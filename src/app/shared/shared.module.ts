import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BuscarBarComponent } from 'src/app/shared/buscar-bar/buscar-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[BuscarBarComponent],
  imports: [IonicModule, CommonModule],
  exports: [BuscarBarComponent],
})
export class SharedModule {}
