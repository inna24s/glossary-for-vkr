import {Component, OnInit} from '@angular/core';
import {Glossary} from "../../models/glossary.model";
import {GlossaryService} from "../../shared/services/glossary.service";

@Component({
  templateUrl: 'glossary.component.html',
  styleUrls: [ './glossary.component.scss' ]
})

export class GlossaryComponent implements OnInit {

  glossary: Glossary = {};
  constructor(private glossaryService: GlossaryService) {
  }

  ngOnInit(): void {
    this.getGlossary();
  }

  public getGlossary(): void {
    this.glossaryService.getGlossary().subscribe((glossary: Glossary) => {
      this.glossary = glossary;
    })
  }
}
