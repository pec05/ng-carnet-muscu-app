import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExerciceAddComponent } from "./exercice-add/exercice-add.component";
import { ExerciceEditComponent } from "./exercice-edit/exercice-edit.component";
import { ExerciceListComponent } from "./exercice-list/exercice-list.component";

const exercicesRoutes: Routes = [
  {path:'exercices', component: ExerciceListComponent},
  {path:'exercices/add', component: ExerciceAddComponent},
  {path:'exercices/:id/edit', component: ExerciceEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(exercicesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class exercicesRoutingModule {
}
