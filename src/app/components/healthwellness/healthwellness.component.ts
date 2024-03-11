import { Component } from '@angular/core';

@Component({
  selector: 'app-health-wellness',
  templateUrl: './healthwellness.component.html',
  styleUrls: ['./healthwellness.component.css']
})
export class HealthWellnessComponent {
  loginName = '';
  userRole = '';

  doctorRecord = {
    name: 'Doc',
    specialization: 'Nutrition',
    patients: ['John Doe', 'Jane Doe']
  };

  patientRecord = {
    name: 'Pat',
    mealPlan: 'Vegetarian',
    workoutRoutine: '30 minutes cardio',
    meditationExercise: '10 minutes morning meditation'
  };

  userName = '';

  newPatient = {
    name: '',
    mealPlan: '',
    workoutRoutine: '',
    meditationExercise: ''
  };

  patients = [
    {
      name: 'John',
      mealPlan: 'Vegetarian',
      workoutRoutine: '30 minutes cardio',
      meditationExercise: '10 minutes morning meditation'
    },
    {
      name: 'Doe',
      mealPlan: 'Keto',
      workoutRoutine: '45 minutes strength training',
      meditationExercise: '15 minutes evening meditation'
    }
  ];

  login() {
    // write your logic here
  }

  addOrUpdatePatient() {
    // write your logic here
  }

  getPatientByName(name: string) {
    // write your logic here
  }
}
