import { Component, OnInit } from '@angular/core';
import { LogService } from '../login.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit{


name:string =''

constructor(private serv: LogService){}
  ngOnInit(): void {
   this.name = this.serv.getName()
  }
}
