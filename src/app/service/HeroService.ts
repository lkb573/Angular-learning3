
import {Injectable} from "@angular/core";
import {Hero} from "../domain/hero";
import {HEROES} from "../mock-data/mock-heroes";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HeroService{

  heroes;

  constructor(private http: HttpClient){  }

  getHeroes(): Observable<Hero[]> {


    return this.http.get('http://localhost:8080/heroes');
  }

  addHero(hero: Hero){


  }

  removeHero(id: number){


  }

}
