import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocialServiceService {
  url = environment.API_URL;
  constructor(private http: HttpClient) {}

  getActivity(slug: string) {
    return this.http.get<any>(`${this.url}/social-services?filters\[Slug\][$eq]=${slug}`);
  }
}
