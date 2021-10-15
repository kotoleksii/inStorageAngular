import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMaterial} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http: HttpClient) {
  }

  public getMaterialItems(): Observable<IMaterial[]> {
    return this.http.get<IMaterial[]>('http://127.0.0.1:8000/api/materials/');
  }

  public addMaterialItem(body: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/materials/', body);
  }

  public editMaterialItem(id: number, body: any): Observable<any> {
    return this.http.patch('http://127.0.0.1:8000/api/materials/' + id, body);
  }

  public removeMaterialItem(id: number): Observable<any> {
    return this.http.delete<any>('http://127.0.0.1:8000/api/materials/' + id);
  }
}
