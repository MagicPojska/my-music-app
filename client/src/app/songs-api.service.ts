import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SongsApiService {
  readonly songsAPIUrl = 'https://localhost:7042/api';

  constructor(private http: HttpClient) {}

  getSongsList(): Observable<any[]> {
    return this.http.get<any>(this.songsAPIUrl + '/pjesma');
  }

  addSongs(data: any) {
    return this.http.post(this.songsAPIUrl + '/pjesma', data);
  }

  updateSong(id: number, data: any) {
    return this.http.put(this.songsAPIUrl + `/pjesma/${id}`, data);
  }

  deleteSong(id: number) {
    return this.http.delete(this.songsAPIUrl + `/pjesma/${id}`);
  }
}
