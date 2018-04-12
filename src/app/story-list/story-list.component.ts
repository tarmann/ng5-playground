import { Component, OnInit } from '@angular/core';

import { Story } from '../story';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent implements OnInit {

  stories: Story[];

  selectedStory: Story;

  selectStory(story: Story): void {
    this.selectedStory = story;
  }

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.getStories();
  }

  getStories(): void {
    this.storyService.getStories()
      .subscribe(stories => this.stories = stories);
  }

}
