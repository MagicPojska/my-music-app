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
    this.categoryList$ = this.service.getCategoryList();
  }

  //Variables
  modalTitle: string = '';
  activateAddEditComponent: boolean = false;
  song: any;

  modalAdd() {
    this.song = {
      id: 0,
      nazivPjesme: null,
      nazivIzvodjaca: null,
      ocjena: 0,
      isFavorite: false,
      urlPjesme: null,
      kategorijaId: 0,
    };
    this.modalTitle = 'Add Song';
    this.activateAddEditComponent = true;
  }

  modalClose() {
    this.activateAddEditComponent = false;
    this.songsList$ = this.service.getSongsList();
  }

  modalEdit(item: any) {
    this.song = item;
    this.modalTitle = 'Edit Song';
    this.activateAddEditComponent = true;
  }
}
