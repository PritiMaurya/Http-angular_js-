import { Component } from '@angular/core';
import {ServerServiceService} from "./server-service.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: ServerServiceService){}
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSaveServer()
  {
    this.service.saveDataHttp(this.servers).subscribe(
      (response: Response)=> {console.log(response)},
      (error)=> {console.log(error)}
    )
  }
  onGetData()
  {
    this.service.getHttpData().subscribe(
      (data: any[])=>{
        this.servers = data;
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  appName = this.service.getAppData();
}
