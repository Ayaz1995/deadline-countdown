// src/app/services/deadline.service.ts
import { Injectable } from '@angular/core';
import { DeadlineApiService } from './deadline-api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeadlineService {
  constructor(private api: DeadlineApiService) {}

  getStartSeconds(): Observable<number> {
    return this.api.getDeadlineSeconds(); // Already returns number
  }
}
