import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SongsApiService } from 'src/app/songs-api.service';

@Component({
  selector: 'app-show-songs',
  templateUrl: './show-songs.component.html',
  styleUrls: ['./show-songs.component.css'],
})
export class ShowSongsComponent implements OnInit {
  songsList$!: Observable<any[]>;
  categoryList$!: Observable<any[]>;

  // Map to display data with foreign keys
  categoryListMap: Map<number, string> = new Map();

  constructor(private service: SongsApiService) {}

  ngOnInit(): void {
    this.songsList$ = this.service.getSongsList();
  }
}
