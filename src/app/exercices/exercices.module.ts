import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ExerciceAddComponent } from "./exercice-add/exercice-add.component";
import { ExerciceEditComponent } from "./exercice-edit/exercice-edit.component";
import { ExerciceListComponent } from "./exercice-list/exercice-list.component";
import { ExerciceService } from "./exercice.service";
import { exercicesRoutingModule } from "./exercices-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    exercicesRoutingModule
  ],
  declarations: [
    ExerciceListComponent,
    ExerciceAddComponent,
    ExerciceEditComponent
  ],
  providers: [ExerciceService]
})

export class ExerciceModule {}
