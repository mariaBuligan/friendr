import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
    posts:any = [
      {
        id: 1,
        user_id: 10,
        date:"Fri Jun 28 2024 11:46:23 GMT+0300 (Eastern European Summer Time)",
        title : 'post one',
        description:'this is my first post'
      },
      {
        id: 2,
        user_id: 10,
        date:"Fri Jun 28 2024 11:46:23 GMT+0300 (Eastern European Summer Time)",
        title : 'post one',
        description:'this is my first post'
      },
      {
        id: 3,
        user_id: 10,
        date:"Fri Jun 28 2024 11:46:23 GMT+0300 (Eastern European Summer Time)",
        title : 'post one',
        description:'this is my first post'
      }
    ];

    title:string='';
    description:string='';
    createPost(){
      console.log(this.title);
      console.log(this.description);
      this.posts.push({
        id: Math.random(),
        user_id: Math.random(),
        date: new Date(),
        title: this.title,
        description:this.description
      })
    }

}