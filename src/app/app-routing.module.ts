import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { DiscoverComponent } from './discover/discover.component';
import { LandingComponent } from './landing/landing.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {path: "", component: LandingComponent},
  {path: "discover", component: DiscoverComponent, canActivate: [AuthGuardGuard]},
  {path: "discover/:postid", component: PostDetailsComponent, canActivate: [AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
