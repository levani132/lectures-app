import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  logStatusChange(status) {
    console.log('სერვერის სტატუსი შეიცვალა და გახდა:', status);
  }
}
