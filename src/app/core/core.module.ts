import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [HeaderComponent, ProductItemComponent],
  imports: [CommonModule, RouterModule, SharedModule, RouterModule],
  exports: [HeaderComponent, ProductItemComponent],
})
export class CoreModule {}
