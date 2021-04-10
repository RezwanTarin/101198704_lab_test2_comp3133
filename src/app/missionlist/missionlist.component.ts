import { HttpClient,HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  private REST_API_END_POINT = "https://api.spacexdata.com/v3/launches"
  missionList: any
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get(this.REST_API_END_POINT).subscribe((response:any) =>{
      console.log(response)
      this.missionList = response
    })

  }

}

