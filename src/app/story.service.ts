import { Injectable } from '@angular/core';
import { Story } from './story';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessageService } from './message.service';

import { STORIES } from './mock-stories';

@Injectable()
export class StoryService {

  constructor(private messageService: MessageService) { }

  getStories(): Observable<Story[]> {
    this.messageService.add('StoryService: fetched stories');
    return of(STORIES);
  }

}
