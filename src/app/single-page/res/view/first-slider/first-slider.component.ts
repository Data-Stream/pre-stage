import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-slider',
  templateUrl: './first-slider.component.html',
  styleUrls: ['./first-slider.component.css']
})
export class FirstSliderComponent implements OnInit {

  blogCarusel = [
    {id: 1, title: 'How to optimize your Facebook & Instagram video ads for success', subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.', img:'assets/img/main_img.jpg', category:'Blog Post', main: true, lenta: false},
    {id: 2, title: 'Explore instagram Video: How to convert, engagem and get more Insta...', subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.', img:'assets/img/img1_thumb.jpg', category:'Report', main: false, lenta: true},
    {id: 3, title: 'Explore instagram Video: How to convert, engagem and get more Insta...', subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.', img:'assets/img/img2_thumb.jpg', category:'Blog Post', main: false, lenta: true},
    {id: 4, title: 'How to optimize your Facebook & Instagram video ads for success', subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.', img:'assets/img/img3_thumb.jpg', category:'Webinar', main: false, lenta: true},
    {id: 5, title: 'How to optimize your Facebook & Instagram video ads for success', subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.', img:'assets/img/img4_thumb.jpg', category:'Report', main: false, lenta: true}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}