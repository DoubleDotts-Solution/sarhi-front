import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  url = environment.API_URL;
  constructor(private http: HttpClient) {}

  getBanners() {
    return this.http.get<any>(`${this.url}/top-banners?populate=%2A`);
  }

  getGallery() {
    return this.http.get<any>(`${this.url}/images?populate=%2A`);
  }

  getTestimonials() {
    return this.http.get<any>(`${this.url}/testimonials?populate=%2A`);
  }

  getSocialActivities() {
    return this.http.get<any>(`${this.url}/social-services?populate=%2A`);
  }
}
