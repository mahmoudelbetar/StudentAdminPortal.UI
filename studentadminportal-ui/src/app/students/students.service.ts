import { Student } from './../models/api-models/student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private baseApi = 'https://localhost:44346';
  constructor(private httpClient: HttpClient) {}

  GetAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(
      this.baseApi + '/api/Student/GetAllStudents'
    );
  }
}
