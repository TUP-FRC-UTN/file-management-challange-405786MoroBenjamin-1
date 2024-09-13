import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { FileItem, FileOwner, FileType } from '../../models/file.item.model';
import { FILE_LIST, OWNERS } from '../../data/file.storage';

@Component({
  selector: 'app-form-file',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-file.component.html',
  styleUrl: './form-file.component.css'
})
export class FormFileComponent implements OnInit{
  owners: FileOwner[] = OWNERS;
  fileTypes: FileType[] = [FileType.FOLDER, FileType.FILE];
  folders: FileItem[] = FILE_LIST.filter(file => file.type === FileType.FOLDER);

  file: FileItem = {
    id: '',
    name: '',
    creation: new Date(),
    owners: [],
    type: 0,
    parentId: '0'
  };

  ngOnInit(): void {
    console.log(this.fileTypes);
    
  }

}
