import { Component, Input, OnInit } from '@angular/core';
import { SongsApiService } from 'src/app/songs-api.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  constructor(private service: SongsApiService) {}

  @Input() category: any;
  id: number = 0;
  nazivKategorije: string = '';

  ngOnInit(): void {
    this.id = this.category.id;
    this.nazivKategorije = this.category.nazivKategorije;
  }

  addCategory() {
    var category = {
      nazivKategorije: this.nazivKategorije,
    };
    this.service.addCategory(category).subscribe((res) => {
      var closeModalBtn = document.getElementById('add-category-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById(
        'add-category-success-alert'
      );
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
}
