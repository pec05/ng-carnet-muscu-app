import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exercice } from '../exercice';
import { ExerciceService } from '../exercice.service';

@Component({
  selector: 'app-exercice-list',
  templateUrl: './exercice-list.component.html',
  styleUrls: ['./exercice-list.component.css']
})
export class ExerciceListComponent implements OnInit {

  exercices: Exercice[];
  errorMessage: string;
  responseStatus: number;

  constructor(private router: Router, private exerciceService: ExerciceService) { }

  ngOnInit() {
    this.exerciceService.getExercices().subscribe(
      exercices => this.exercices = exercices,
      error => this.errorMessage = error as any
    );
  }

  addExercice() {
    this.router.navigate(['/exercices/add']);
  }

  editExercice(exercice: Exercice) {
    this.router.navigate(['/exercices', exercice.id, 'edit']);
  }

  deleteExercice(exercice: Exercice) {
    this.exerciceService.deleteExercice(exercice.id.toString()).subscribe(
      response => {
        this.responseStatus = response;
        this.exercices = this.exercices.filter(currentItem => !(currentItem.id === exercice.id));
      },
      error => this.errorMessage = error as any
    )
  }
}
