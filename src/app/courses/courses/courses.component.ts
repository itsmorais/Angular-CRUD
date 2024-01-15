import { Component } from '@angular/core';
import { Course } from '../model/course';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CoursesServiceService } from '../services/courses-service.service';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses$:Observable<Course[]>;
  displayedColumns = ['name', 'category'];

 // coursesServiceService: CoursesServiceService;

constructor(private coursesServiceService: CoursesServiceService){
  this.courses$ = this.coursesServiceService.list()
  .pipe(
    catchError(error => {
      console.log(error)
      return of([])
    })
  )
}

}
