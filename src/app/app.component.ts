import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workgenius';
  listLoaded = true;
  listItems = [
    {name: "image1", alt: "alt1", description: "desc1", id:1},
    {name: "image1", alt: "alt1", description: "desc1", id:2},
    {name: "image1", alt: "alt1", description: "desc1", id:3},
    {name: "image1", alt: "alt1", description: "desc1", id:4},
    {name: "image1", alt: "alt1", description: "desc1", id:5},
    {name: "image1", alt: "alt1", description: "desc1", id:6},
    {name: "image1", alt: "alt1", description: "desc1", id:7},
    {name: "image1", alt: "alt1", description: "desc1", id:8},
    {name: "image1", alt: "alt1", description: "desc1", id:9},
    {name: "image1", alt: "alt1", description: "desc1", id:10},
    {name: "image1", alt: "alt1", description: "desc1", id:11},
    {name: "image1", alt: "alt1", description: "desc1", id:12},
    {name: "image1", alt: "alt1", description: "desc1", id:13},
  ];

  show(index: number){
    console.log("show lists with array " + index);
  }
}
