import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = true;
  serverCreationStatus = "No server was created";
  serverName = "";
  serverCreated = false;
  servers = ['server-1','server-2','server-3'];
  
  constructor(){
    //setTimeout(()=>{this.allowNewServer=false},5000);
  }

  ngOnInit(): void {
    
  }

  onCreateServer(){
    this.serverCreationStatus = "Server " + this.serverName +  " was created";
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:any){
    this.serverName = (<HTMLInputElement>event).value;
  }
}
