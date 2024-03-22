import { Injectable } from '@angular/core';
import { Course } from '../model/course';

import { HttpClient } from '@angular/common/http';
import { delay, first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  // somente api/courses pois foi configurado no Proxy o caminho correto, para evitar erro de CORS
  private readonly API = 'api/courses';

  list(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API).pipe(first(), delay(500));
  }
}


