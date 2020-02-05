import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPetsComponent } from '../Pets/all-pets/all-pets.component';
import { MyPetsComponent } from '../Pets/my-pets/my-pets.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AllPetsComponent, MyPetsComponent]
})
export class PetsModule { }
