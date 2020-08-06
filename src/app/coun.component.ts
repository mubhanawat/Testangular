import { Component } from '@angular/core'

@Component({

    selector:'app-count',
    template:`
    
    <button [class]="counter-button" (click)='show()'>click</button>
    <h2 class="counter"> counter:{{count}} </h2>
    `,
    styles:[]
    

})


export class CounterComponent{

}