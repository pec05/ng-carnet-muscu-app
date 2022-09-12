import { Muscle } from "../muscles/muscle";
import { Serie } from "../series/serie";
import { Workout } from "../workouts/workout";

export interface Exercice {
  id: number;
  name: string;
  muscle: Muscle;
  series: Serie[];
  workout: Workout;
}
