import { Component } from '@angular/core';
import { Course } from '../model/course';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CoursesServiceService } from '../services/courses-service.service';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { CategoryPipe } from '../../shared/pipes/category.pipe';

@Component({
    selector: 'app-courses',
    standalone: true,
    templateUrl: './courses.component.html',
    styleUrl: './courses.component.scss',
    imports: [AppMaterialModule, CategoryPipe]
})
export class CoursesComponent {
  courses$:Observable<Course[]>;
  displayedColumns = ['name', 'category']

 // coursesServiceService: CoursesServiceService;

constructor(private coursesServiceService: CoursesServiceService,
  public dialog:MatDialog){
  this.courses$ = this.coursesServiceService.list()
  .pipe(
    catchError(error => {
      this.onError("Erro ao carregar cursos.")
      return of([])
    })
  )
}

onError(errorMsg:string) {
  this.dialog.open(ErrorDialogComponent, {
    data:errorMsg
  });
}
}


