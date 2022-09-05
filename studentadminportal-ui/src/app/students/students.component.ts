import { Student } from './../models/api-models/student';
import { StudentsService } from './students.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'dateOfBirth',
    'email',
    'mobile',
    'gender',
  ];
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {
    // Fetch all students
    this.studentService.GetAllStudents().subscribe(
      (success) => {
        this.students = success;
        this.dataSource = new MatTableDataSource<Student>(this.students);
        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }
        if (this.matSort) {
          this.dataSource.sort = this.matSort;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
