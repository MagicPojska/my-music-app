import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SongsApiService {
  readonly songsAPIUrl = 'https://localhost:7042/api';

  constructor(private http: HttpClient) {}

  //Songs
  getSongsList(): Observable<any[]> {
    return this.http.get<any>(this.songsAPIUrl + '/pjesma');
  }

  addSong(data: any) {
    return this.http.post(this.songsAPIUrl + '/pjesma/add', data);
  }

  updateSong(id: number, data: any) {
    return this.http.put(this.songsAPIUrl + `/pjesma/${id}`, data);
  }

  deleteSong(id: number) {
    return this.http.delete(this.songsAPIUrl + `/pjesma/${id}`);
  }

  //Category
  getCategoryList(): Observable<any[]> {
    return this.http.get<any>(this.songsAPIUrl + '/kategorija');
  }

  addCategory(data: any) {
    return this.http.post(this.songsAPIUrl + '/kategorija', data);
  }

  updateCategory(id: number, data: any) {
    return this.http.put(this.songsAPIUrl + `/kategorija/${id}`, data);
  }

  deleteCategory(id: number) {
    return this.http.delete(this.songsAPIUrl + `/kategorija/${id}`);
  }
}
