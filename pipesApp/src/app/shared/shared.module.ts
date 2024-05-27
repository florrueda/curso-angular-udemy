import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuComponent } from './components/menu/menu.component';
import { MenuBarComponent } from './components/menuBar/menuBar.component';



@NgModule({
  declarations: [
    MenuComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    MenuComponent,
    MenuBarComponent
  ]
})
export class SharedModule { }
