import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInterface } from './userinterface';
import { Customer} from './customer';

@Injectable({
   providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = 'http://localhost:3000/user';
  private REST_API_SERVER1 = 'http://localhost:3000/addUser';
  private REST_API_SERVER2 = 'http://localhost:3000/deluser';
  private REST_API_SERVER3 = 'http://localhost:3000/update';
  private REST_API_SERVER4= 'http://localhost:3000/questions';
   constructor(private httpClient: HttpClient) { }

public sendGetRequest() {
   return this.httpClient.get(this.REST_API_SERVER);
}

public sendPostRequest(user: UserInterface) {
    return this.httpClient.post(this.REST_API_SERVER1, user);
}
public sendDeleteRequest(id: number) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: {id} };
    return this.httpClient.delete(this.REST_API_SERVER2, httpOptions);
}
public sendUpdateRequest(customer: Customer){
  return this.httpClient.put(this.REST_API_SERVER3, customer);
}
public feedbackRequest() {
   return this.httpClient.get(this.REST_API_SERVER4);
}
}
