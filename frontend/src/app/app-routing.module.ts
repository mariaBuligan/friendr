import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'',
    component:AppComponent
  },
  {
    path:'homepage',
    component:HomepageComponent
  },
  {
    path:'createPost',
    component:CreatePostComponent
  },

  {path:'**',redirectTo:''}, //o cale pe care nu o avem in path o sa duca automat la LoginComponent
                                        //** -> inseamna ORICE cale ->se duce la pathul ''(empty) ->LoginComponent
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
