import { Component, OnInit } from "@angular/core";

@Component({

selector:'app-counter',
template: `<button (click)='show()'>Click here</button>
<p>Your count is: {{counter}}</p>  `,
styles: ['p{font-weight:bold;font-size:40;font-family:arial}'
  ]

})

export class CounterComponent {

counter:number=101;

show(){
    this.counter++;
}


}