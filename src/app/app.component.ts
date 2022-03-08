import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';
import { NodeModel } from './models/node.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mable-test';

  json: string = '';
  nodeArray: NodeModel[] = [];

  /*nodes$: Observable<NodeModel[]>;*/

  constructor() {
  }

  ngOnInit(): void {
    //this.nodeArray = [{ "id": "0-0", "name": "asd", "type": "folder", "children": [{ "id": "0-1", "name": "asda", "type": "folder", "children": [{ "id": "0-0-0", "name": "asda", "type": "folder", "children": [] }, { "id": "0-0-1", "name": "blah", "type": "file", "children": [] }] }, { "id": "blah", "type": "folder", "children": [], "name": "Testing" }] }];

    //this.nodes$ = of(this.nodeArray);

    this.setJson();
  }

  treeChanged(): void {

    this.setJson();
  }

  setJson(): void {
    this.json = JSON.stringify(this.nodeArray);
  }
}
