import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './pages/graph/graph.component';
import { GlossaryComponent } from './pages/glossary/glossary.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import {NgxGraphModule} from "@swimlane/ngx-graph";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GlossaryService} from "./shared/services/glossary.service";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: 'glossary',
    component: GlossaryComponent
  },
  {
    path: 'graph',
    component: GraphComponent
  },
  {
    path: '**',
    redirectTo: 'graph'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), DxDataGridModule, DxFormModule, NgxGraphModule, BrowserAnimationsModule, HttpClientModule],
  exports: [RouterModule],
  declarations: [
    GraphComponent,
    GlossaryComponent
  ],
  providers: [GlossaryService]
})
export class AppRoutingModule { }
