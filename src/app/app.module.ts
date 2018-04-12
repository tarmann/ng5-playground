import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { StoryFiltersComponent } from './story-filters/story-filters.component';
import { AppTestComponent } from './app-test/app-test.component';
import { MyTestComponent } from './my-test/my-test.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryItemComponent } from './story-item/story-item.component';

import { StoryService } from './story.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    StoryFiltersComponent,
    AppTestComponent,
    MyTestComponent,
    StoryListComponent,
    StoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
