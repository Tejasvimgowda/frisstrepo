import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { settings_data } from '../model/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: settings_data[];
  constructor(private http: HttpClient) {
    this.settings = [];
    this.getSettings(); 
    
  }
  getSettings() {
    console.log('calling')
    return this.http.get('http://localhost:3000/settings')
  }

  postSettings(data: any) {
    return this.http.post('http://localhost:3000/settings',data)
  }
}



