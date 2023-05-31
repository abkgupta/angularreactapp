import { AfterViewInit, Component, OnChanges, OnDestroy, SimpleChange, SimpleChanges } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Myreactc from './Myreacctcomponent';

@Component({
  selector: 'app-root',
  template: '<div [id] ="rootId"></div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, AfterViewInit, OnDestroy{ 
  title = 'angularreactapp';
  public rootId = 'rootId'

  ngOnChanges(changes: SimpleChanges){
  this.render();
  }
   ngAfterViewInit(): void {
       this.render();
   }
   ngOnDestroy(): void {
       
   }
   private render(){
    ReactDOM.render(React.createElement(Myreactc), document.getElementById(this.rootId))
   }
}
