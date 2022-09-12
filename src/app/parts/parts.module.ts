import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PageNotFoundComponent,
    WelcomeComponent
  ],
  exports: [
    PageNotFoundComponent,
    WelcomeComponent
  ]
})

export class PartsModule {}
