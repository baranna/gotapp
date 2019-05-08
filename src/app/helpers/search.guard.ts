import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {SearchService} from '../services/search.service';

@Injectable({
  providedIn: 'root'
})
export class SearchGuard implements CanActivate {

  constructor(private searchService: SearchService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.searchService.type === undefined || this.searchService.name === undefined) {
      this.router.navigateByUrl('');
      return false;
    }
    return true;
  }

}
