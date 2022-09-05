import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MuscleAddComponent } from "./muscle-add/muscle-add.component";
import { MuscleEditComponent } from "./muscle-edit/muscle-edit.component";
import { MuscleListComponent } from "./muscle-list/muscle-list.component";
import { MuscleService } from "./muscle.service";
import { MusclesRoutingModule } from "./muscles-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MusclesRoutingModule
  ],
  declarations: [
    MuscleListComponent,
    MuscleAddComponent,
    MuscleEditComponent
  ],
  exports: [
    MuscleListComponent
  ],
  providers:[MuscleService]
})
export class MusclesModule {}
