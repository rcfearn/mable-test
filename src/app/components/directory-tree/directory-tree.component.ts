import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NodeModel } from '../../models/node.model';

@Component({
  selector: 'app-directory-tree',
  templateUrl: './directory-tree.component.html',
  styleUrls: ['./directory-tree.component.scss']
})
export class DirectoryTreeComponent implements OnInit {

  @Input() nodes: NodeModel[] = [];
  @Input() isRoot = true;
  @Input() idPrefix = '0';

  @Output() onChange = new EventEmitter();

  private id = 0;

  constructor() { }

  ngOnInit() {

  }

  addNode(nodeType: string, parent?: NodeModel[]) {
    if (!parent) {
      parent = this.nodes;
    }

    const newNode = <NodeModel>{
      id: `${this.idPrefix}-${this.id++}`,
      name: null,
      type: nodeType,
      children: [],
    };
    
    parent.push(newNode);

    this.treeChanged();
  }

  treeChanged(): void {
    this.onChange.emit();
  }

  nodeDeleted(node: NodeModel): void {
    this.nodes.splice(this.nodes.indexOf(node), 1);
    this.treeChanged();
  }
}
