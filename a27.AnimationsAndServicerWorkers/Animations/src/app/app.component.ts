import { 
  style,
  trigger,
  state, 
  transition,
  animate,
  group,
  keyframes} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    // First Trigger
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style ({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
    ]),
    // Second Trigger
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style ({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style ({
        'background-color': 'green',
        transform: 'translateX(0) scale(.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
       style({
          'background-color': 'orange'
       }),
       animate(1000, style({
        borderRadius: '50px'
       })),
       animate(500)
      ])
    ]),
    // Third Trigger
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
        ]),
      transition(':leave', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
        ])
    ]),
    // Fourth Trigger
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.8
          }),
          style({
            transform: 'translate(-20px)',
            opacity: 1,
            offset: 1
          })
        ]))
        ]),
      transition(':leave', [
        group([
        animate(300, style({
          color: 'red'
        })),
        animate(800, style({
          transform: 'translateX(100px)',
          opacity: 0,
        }))
        ])
      ])
    ])
  ]
})
export class AppComponent {
  state = "normal";
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate(){
    this.state == 'normal' ? this.state = 'highlighted' :
    this.state = 'normal';
    this.wildState == 'normal' ? this.wildState = 'highlighted' :
    this.wildState = 'normal';
  }

  onShrink(){
    this.wildState = 'shrunken';
  }

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item){
    this.list.splice(this.list.indexOf(item), 1);
  }

  animationStarted(event){
    console.log(event);
  }

  animationEnded(event){
    console.log(event);
  }
}
