import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FileOwner } from '../models/file.item.model';
import { FILE_LIST, OWNERS } from '../data/file.storage';
import { DatePipe, NgIf } from '@angular/common';
import { FormFileComponent } from "./form-file/form-file.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, NgIf, FormFileComponent, FormFileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  files: FileItem[] = FILE_LIST;
  owners: FileOwner[] = OWNERS;
  title = 'file-management';

  ngOnInit(): void {
    console.log(this.files);
    console.log(this.owners);

  }
}
