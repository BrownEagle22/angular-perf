import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person.model';

import { firstValueFrom} from 'rxjs';

import people1k from '../testsets/people1k';
import people10k from '../testsets/people10k';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private client: HttpClient) { }

  // getPeople(count: number): Observable<Person> {
  //   let url = "https://randomuser.me/api/?results=" + count;
  //   return this.client.get<Person>(url);
  // }

  getPeople(count: number): Observable<any> {
    let url = "https://randomuser.me/api/?results=" + count;
    return this.client.get<any>(url);
  }

  // getPeople(): Person[] {
  //   let ppl = JSON.parse(people10k).results;
  //   for (let idx in ppl) {
  //     ppl[idx].id = idx;
  //   }
  //   return ppl;
  // }
}

