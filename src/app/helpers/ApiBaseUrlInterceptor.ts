import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiBaseUrlInterceptor implements HttpInterceptor {

  constructor(@Inject('API_BASE_URL') private baseURL: string) {
  }

  /*
  Adding the API base URL to the requests
 */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({url: `${this.baseURL}/${req.url}`});
    return next.handle(apiReq);
  }

}
