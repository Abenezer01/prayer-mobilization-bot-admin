import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvService } from '../env.service';
import { ApiService } from './../api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  constructor( http: HttpClient) {
    super(`${EnvService.API_URL}/api/users`, http);
  }
}
