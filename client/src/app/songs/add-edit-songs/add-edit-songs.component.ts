import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SongsApiService } from 'src/app/songs-api.service';

@Component({
  selector: 'app-add-edit-songs',
  templateUrl: './add-edit-songs.component.html',
  styleUrls: ['./add-edit-songs.component.css'],
})
export class AddEditSongsComponent implements OnInit {
  songsList$!: Observable<any[]>;
  categoryList$!: Observable<any[]>;

  constructor(private service: SongsApiService) {}

  @Input() song: any;
  id: number = 0;
  nazivPjesme: string = '';
  nazivIzvodjaca: string = '';
  ocjena: number = 0;
  isFavorite: boolean = false;
  urlPjesme: string = '';
  kategorijaId: number = 0;

  ngOnInit(): void {
    this.id = this.song.id;
    this.nazivPjesme = this.song.nazivPjesme;
    this.nazivIzvodjaca = this.song.nazivIzvodjaca;
    this.ocjena = this.song.ocjena;
    this.isFavorite = this.song.isFavorite;
    this.urlPjesme = this.song.urlPjesme;
    this.kategorijaId = this.song.idKategorije;
    this.songsList$ = this.service.getSongsList();
    this.categoryList$ = this.service.getCategoryList();
  }

  addSong() {
    var song = {
      nazivPjesme: this.nazivPjesme,
      nazivIzvodjaca: this.nazivIzvodjaca,
      ocjena: this.ocjena,
      isFavorite: this.isFavorite,
      urlPjesme: this.urlPjesme,
      kategorijaId: this.kategorijaId,
    };
    this.service.addSong(song).subscribe((res) => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = 'block';
      }
      setTimeout(function () {
        if (showAddSuccess) {
          showAddSuccess.style.display = 'none';
        }
      }, 3000);
    });
  }

  editSong() {
    var song = {
      id: this.id,
      nazivPjesme: this.nazivPjesme,
      nazivIzvodjaca: this.nazivIzvodjaca,
      ocjena: this.ocjena,
      isFavorite: this.isFavorite,
      urlPjesme: this.urlPjesme,
      kategorijaId: this.kategorijaId,
    };
    var id: number = this.id;

    this.service.updateSong(id, song).subscribe((res) => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showEditSuccess = document.getElementById('update-success-alert');
      if (showEditSuccess) {
        showEditSuccess.style.display = 'block';
      }
      setTimeout(function () {
        if (showEditSuccess) {
          showEditSuccess.style.display = 'none';
        }
      }, 3000);
    });
  }
}
