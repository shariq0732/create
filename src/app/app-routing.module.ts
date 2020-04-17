import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InformationscreenComponent } from './informationscreen/informationscreen.component';
import { MasterComponentComponent } from './master-component/master-component.component';
import { SerachbaarComponent } from './serachbaar/serachbaar.component';



const routes: Routes = [
  { path: '', redirectTo: 'serachbaar', pathMatch: 'full'},
  { path : 'serachbaar' , component : SerachbaarComponent},
  { path : 'ag-grid' , component : AgGridComponent},
  { path : 'informationscreen' , component : InformationscreenComponent },
  { path : 'master-component', component : MasterComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
