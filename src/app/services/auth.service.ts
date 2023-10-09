import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "https://localhost:7225/api/"
  constructor(private http: HttpClient) { }

signUp(UserObj:any){
  return this.http.post<any>(`${this.baseUrl}registers`,UserObj)

}
login(loginObj: any){
  return this.http.post<any>(`${this.baseUrl}User`,loginObj)
}

}
