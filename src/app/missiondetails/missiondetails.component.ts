import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';
/*
export interface missionDetails {
  mission_name: string;
  launch_year: number;
  details: string;
  mission_patch_small:string;
}
*/
@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  private REST_API_END_POINT = "https://api.spacexdata.com/v3/launches"
  missionDetails:any

  constructor(private activatedRoute:ActivatedRoute,private httpClient: HttpClient) { }

  ngOnInit(): void {
   let flight_number = this.activatedRoute.snapshot.paramMap.get('flight_number')
    console.log(flight_number)

    this.httpClient.get(`${this.REST_API_END_POINT}${flight_number}`).subscribe((response:any) =>{
      console.log(response)
      this.missionDetails = response
    })
  }

}
