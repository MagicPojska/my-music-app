import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { ShowSongsComponent } from './songs/show-songs/show-songs.component';
import { AddEditSongsComponent } from './songs/add-edit-songs/add-edit-songs.component';
import { SongsApiService } from './songs-api.service';
import { AddCategoryComponent } from './songs/add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    ShowSongsComponent,
    AddEditSongsComponent,
    AddCategoryComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [SongsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
