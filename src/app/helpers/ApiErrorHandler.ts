import {ErrorHandler, Injectable, NgZone} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ApiErrorHandler extends ErrorHandler {

  constructor(private snackBar: MatSnackBar, private zone: NgZone) {
    super();
  }

  /**
   Global error handler method
   shows the error in a snackbar
   * @param error the thrown error
   */
  handleError(error: Error | HttpErrorResponse) {
    if (error instanceof HttpErrorResponse) {
      this.zone.run(() => {
        if (!navigator.onLine) {
          this.snackBar.open('There is no internet connection', 'Dismiss', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
        } else {
          this.snackBar.open(error.message, 'Dismiss', {duration: 5000, horizontalPosition: 'center', verticalPosition: 'bottom'});
        }
      });
    }
  }
}
