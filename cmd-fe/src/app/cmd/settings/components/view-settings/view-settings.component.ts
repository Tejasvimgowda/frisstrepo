import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../service/settings.service';

@Component({
  selector: 'app-view-settings',
  templateUrl: './view-settings.component.html',
  styleUrls: ['./view-settings.component.scss']
})
export class ViewSettingsComponent implements OnInit {
  details:any =[];

  constructor(private service:SettingsService) { 
  }

  ngOnInit(): void {
    this.service.getSettings().subscribe((data:any) => {
      for(let d of data){
        this.details.push(d)
      }
    })
    console.log(this.details)
  }

}
