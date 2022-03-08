import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NodeModel } from '../../models/node.model';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {

  @Input() node: NodeModel;
  @Output() onChange = new EventEmitter();
  @Output() onDelete = new EventEmitter<NodeModel>();
  @Output() addNode = new EventEmitter<NodeModel[]>();

  formGroup: FormGroup;

  editMode: boolean;

  constructor() { }

  ngOnInit() {

    this.editMode = this.node.name === null || this.node.type === 'unset';

    this.formGroup = new FormGroup({
      name: new FormControl(this.node.name, [Validators.required]),
    });
  }

  submit(): void {
    if (this.formGroup.valid) {
      this.node.name = this.formGroup.get('name').value;
      this.editMode = false;
      this.nodeChanged();
    }
    else {
      this.remove();
    }
  }

  add(): void {
    this.addNode.emit(this.node.children);
  }

  setNode(type: 'folder' | 'file' | 'unset' | null): void {
    this.node.type = type;
  }

  remove(): void {
    this.onDelete.emit(this.node);
  }

  nodeChanged(): void {
    this.onChange.emit();
  }
}
