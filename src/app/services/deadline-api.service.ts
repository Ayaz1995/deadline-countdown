// src/app/services/deadline-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeadlineApiService {
  constructor(private http: HttpClient) {}

  getDeadlineSeconds(): Observable<number> {
    return this.http.get<any>('/api/deadline').pipe(
      tap((data) => console.log('Raw API response:', data)),
      map((res) => res.secondsLeft)
    );
  }
}
