import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatCardModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
