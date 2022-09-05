import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Muscle } from '../muscle';
import { MuscleService } from '../muscle.service';

@Component({
  selector: 'app-muscle-add',
  templateUrl: './muscle-add.component.html',
  styleUrls: ['./muscle-add.component.css']
})
export class MuscleAddComponent implements OnInit {

  muscle: Muscle;
  errorMessage: string;
  @Output() newMuscle = new EventEmitter<Muscle>();

  constructor(private muscleService: MuscleService) {
    this.muscle = {} as Muscle;
   }

  ngOnInit(): void {
  }

  onSubmit(muscle: Muscle) {
    muscle.id = undefined;
    this.muscleService.addAndUpdateMuscle(muscle).subscribe(
      newMuscle => {
        this.muscle = newMuscle;
        this.newMuscle.emit(this.muscle);
      },
      error => this.errorMessage = error as any
    );
  }
}
