import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Muscle } from '../muscle';
import { MuscleService } from '../muscle.service';

@Component({
  selector: 'app-muscle-list',
  templateUrl: './muscle-list.component.html',
  styleUrls: ['./muscle-list.component.css']
})
export class MuscleListComponent implements OnInit {

  muscles: Muscle[];
  errorMessage: string;
  responseStatus: number;
  isInsert = false;

  constructor(private muscleService: MuscleService, private router: Router) {
    this.muscles = [] as Muscle[];
   }

  ngOnInit() {
    this.muscleService.getMuscles().subscribe(
      muscles => this.muscles = muscles,
      error =>  this.errorMessage = error as any
    );
  }

  deleteMuscle(muscle: Muscle) {
    this.muscleService.deleteMuscle(muscle.id.toString()).subscribe(
      response => {
        this.responseStatus = response;
        this.muscles = this.muscles.filter(currentItem => !(currentItem.id === muscle.id));
      },
      error => this.errorMessage = error as any
    );
  }

  showEditMuscleComponent(updateMuscle: Muscle) {
    this.router.navigate(['/muscles', updateMuscle.id.toString(), 'edit']);
  }

  goToHome() {
    this.router.navigate(['/welcome']);
  }

  showAddMuscleComponent() {
    this.isInsert = !this.isInsert;
  }

  onNewMuscle(newMuscle: Muscle) {
    this.muscles.push(newMuscle);
    this.showAddMuscleComponent();
  }

}
