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

  /**
   If the entity's name and data are not set yet,
   users can't navigate to the searchResult component
   they are redirected to the home screen
   * @return {boolean} whether we can navigate to the route
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.searchService.type === undefined || this.searchService.name === undefined) {
      this.router.navigateByUrl('');
      return false;
    }
    return true;
  }

}
