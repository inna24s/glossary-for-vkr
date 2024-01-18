import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Glossary, MindMap} from "../../models/glossary.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class GlossaryService {

  constructor (
    private http: HttpClient
  ) {
  }

  public getGlossary(): Observable<Glossary> {
    return this.http.get<Glossary>(`${environment.url}/glossary`);
  }

  public getMindMap(): Observable<MindMap> {
    return this.http.get<MindMap>(`${environment.url}/mind-map`);
  }

}
