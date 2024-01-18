import {Node, Edge} from "@swimlane/ngx-graph";

export interface Glossary {
  [field: string]: string;
}

export interface MindMap {
  nodes: Node[];
  links: Edge[];
}
