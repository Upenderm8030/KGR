import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getimages(typevalue:any, subtypevalue:any) {
    return this.http.get(`http://127.0.0.1:8000/banners/?type=Home&sub_type=Banner`);
  }

  // getbanner(typevalue:any,subtypevalue:any){
  //   return this.http.get(`http://127.0.0.1:8000/banners/?type=Home&sub_type=Banner`);
  // }

  // getvideos(typevalue:any,subtypevalue:any){
  //   return this.http.get(`http://127.0.0.1:8000/videos/?type=Home&sub_type=Banner`);
  // }

}
