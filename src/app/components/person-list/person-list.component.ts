import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  people: Person[] = [];
  selection: Person[] = [];

  filterText: string = "";
  
  constructor(private personService: PersonService, private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.append1k();
  }

  trackById(index, person) {
    return person.id;
  }

  onAddClick(): void {
    this.append10k();
  }

  onUpdateAllClick(): void {
    let counter = 1;
    for (let person of this.people) {
      person.name.first = counter.toString();
      person.name.last = counter.toString();
      person.email = counter.toString();
      person.phone = counter.toString();
      counter++;
    }
  }

  onUpdate10Click(): void {
    let counter = 1;
    for (let person of this.people) {
      if (counter % 10 === 0) {
        person.name.first = counter.toString();
        person.name.last = counter.toString();
        person.email = counter.toString();
        person.phone = counter.toString();        
      }

      counter++;
    }
  }

  onClearClick(): void {
    this.people = [];
    this.changeDetector.markForCheck();
  }

  append10k() {
    //this.people.push(...this.personService.getPeople());
    this.personService.getPeople(10000).subscribe(
      (value) => this.people.push(...value.results)
    )
  }

  append1k() {
    //this.people.push(...this.personService.getPeople().slice(0, 1000));
    this.personService.getPeople(1000).subscribe(
      (value) => this.people.push(...value.results)
    )
  }

  swap2rows() {
    let i1 = 0;
    let i2 = 100;

    let temp = this.people[i1];
    this.people[i1] = this.people[i2];
    this.people[i2] = temp;
  }
}
