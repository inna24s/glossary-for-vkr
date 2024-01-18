import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { Edge, Node, Layout } from '@swimlane/ngx-graph';
import {GlossaryService} from "../../shared/services/glossary.service";
import {MindMap} from "../../models/glossary.model";

@Component({
  templateUrl: 'graph.component.html',
  styleUrls: [ './graph.component.scss' ]
})

export class GraphComponent implements OnInit {
  nodes: Node[] = [];

  links: Edge[] = [];

  layout: string | Layout = 'dagre';

  curve: any = shape.curveBundle.beta(1);

  draggingEnabled: boolean = true;
  panningEnabled: boolean = true;
  zoomEnabled: boolean = true;

  zoomSpeed: number = 0.1;
  minZoomLevel: number = 0.1;
  maxZoomLevel: number = 4.0;
  panOnZoom: boolean = true;

  autoZoom: boolean = true;
  autoCenter: boolean = false;

  constructor(private glossaryService: GlossaryService) {
  }

  ngOnInit() {
    this.getMindMap();
  }

  public getMindMap(): void {
    this.glossaryService.getMindMap().subscribe((mindMap: MindMap) => {
      this.nodes = mindMap.nodes;
      this.links = mindMap.links;
    })
  }

}
