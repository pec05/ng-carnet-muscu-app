import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MuscleAddComponent } from "./muscle-add/muscle-add.component";
import { MuscleEditComponent } from "./muscle-edit/muscle-edit.component";
import { MuscleListComponent } from "./muscle-list/muscle-list.component";

const musclesRoutes: Routes = [
  {path:'muscles', component: MuscleListComponent},
  {path:'muscle/add', component: MuscleAddComponent},
  {path:'muscles/:id/edit', component: MuscleEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(musclesRoutes)],
  exports: [RouterModule]
})

export class MusclesRoutingModule {}
