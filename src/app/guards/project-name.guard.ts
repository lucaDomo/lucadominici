import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';


export const projectNameGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  var name = route.paramMap.get('projectname')
  if (name!="coldstorageservice" && name!="moneytracker" && name!="fakeserverapi"){
    router.navigate(["/404"])
    return false
  }
  return true;
};
