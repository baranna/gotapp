import {ErrorHandler, Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

// TODO: ErrorHandler
@Injectable({
  providedIn: 'root'
})
export class ApiErrorHandler extends ErrorHandler {

  constructor(private snackBar: MatSnackBar) {
    super();
  }

  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {

      } else {
        console.log('http error');

      }
    }
  }
}
