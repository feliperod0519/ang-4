import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
                .on-line{
                  color:white
                }
             `]
})
export class ServerComponent {
  serverId:number = 10;
  serverStatus: string= 'off-line'

  constructor(){
    this.serverStatus = Math.random()>0.5?'on-line':'off-line';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus==='on-line'?'green':'red';
  }
}
