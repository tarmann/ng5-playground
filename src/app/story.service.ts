import { Injectable } from '@angular/core';
import { Story } from './story';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { STORIES } from '../mock-stories';

@Injectable()
export class StoryService {

  constructor() { }

  getStories(): Observable<Story[]> {
     return of(STORIES);
  }

}
