import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectoryTreeComponent } from './components/directory-tree/directory-tree.component';
import { NodeComponent } from './components/node/node.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryTreeComponent,
    NodeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
