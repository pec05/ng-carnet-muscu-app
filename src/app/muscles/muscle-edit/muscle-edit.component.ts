import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Muscle } from '../muscle';
import { MuscleService } from '../muscle.service';

@Component({
  selector: 'app-muscle-edit',
  templateUrl: './muscle-edit.component.html',
  styleUrls: ['./muscle-edit.component.css']
})
export class MuscleEditComponent implements OnInit {

  muscle: Muscle;
  errorMessage: string;

  constructor(private muscleService: MuscleService, private route: ActivatedRoute, private router: Router) {
    this.muscle = {} as Muscle;
   }

  ngOnInit() {
    const muscleID = this.route.snapshot.params['id'];
    this.muscleService.getMuscleByID(muscleID).subscribe(
      muscle => this.muscle = muscle,
      error => this.errorMessage = error as any
    );
  }

  onSubmit(muscle: Muscle) {
    this.muscleService.addAndUpdateMuscle(muscle).subscribe(
      response => {
        console.log('updated success');
        this.onBack();
      },
      error => this.errorMessage = error as any
    );
  }

  onBack() {
    this.router.navigate(['/muscles']);
  }
}
