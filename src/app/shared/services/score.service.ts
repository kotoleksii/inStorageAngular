import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMaterial, IScore} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient) {
  }

  public getScoreItems(): Observable<IScore[]> {
    return this.http.get<IScore[]>('http://127.0.0.1:8000/api/scores/');
  }

  public addScoreItem(body: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/scores/', body);
  }

  public editScoreItem(id: number, body: any): Observable<any> {
    return this.http.patch('http://127.0.0.1:8000/api/scores/' + id, body);
  }

  public removeScoreItem(id: number): Observable<any> {
    return this.http.delete<any>('http://127.0.0.1:8000/api/scores/' + id);
  }
}
