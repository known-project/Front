import { Component, OnInit, Input } from '@angular/core';
import { ClassModel } from '../class.model';
import { DataService } from 'src/app/data.service';
// class item
@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  @Input() ClassItem: ClassModel;


  constructor(private dataService : DataService) { }

  ngOnInit() {
  }

  onSelectedAnalisys()//show student list
  {
	this.dataService.classSelected.emit(this.ClassItem);
  }
}
