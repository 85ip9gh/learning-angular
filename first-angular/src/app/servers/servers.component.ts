import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  createNewServer = false;

  constructor(){
    setTimeout(() =>{
      this.createNewServer = true;
    }, 3000)
  }

}
