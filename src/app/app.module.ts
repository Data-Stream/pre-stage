import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './res/view/header/header.component';
import { FirstSliderComponent } from './single-page/res/view/first-slider/first-slider.component';
import { BlogPostComponent } from './res/view/blog-post/blog-post.component';
import { PopularComponent } from './single-page/res/view/popular/popular.component';
import { EventsComponent } from './single-page/res/view/events/events.component';
import { SubscribeComponent } from './res/view/subscribe/subscribe.component';
import { FooterComponent } from './res/view/footer/footer.component';
import { SinglePageComponent } from './single-page/single-page.component';
import {SecondPageComponent} from "./second-page/second-page.component";
import { ListItemsComponent } from './list-items/list-items.component';
import { ChatComponent } from './chat/chat.component';
import { PersonalMessagesComponent } from './chat/res/view/personal-messages/personal-messages.component';
import { FilesComponent } from './chat/res/view/files/files.component';
import { MainUserComponent } from './chat/res/view/main-user/main-user.component';
import { UsersComponent } from './chat/res/view/users/users.component';
import { AddQuestionComponent } from './chat/res/view/add-question/add-question.component';
import { ChatHeaderComponent } from './chat/res/view/chat-header/chat-header.component';
import { LentaComponent } from './single-page/res/view/first-slider/res/view/lenta/lenta.component';
import { MainComponent } from './single-page/res/view/first-slider/res/view/main/main.component';
import { NewPostComponent } from './res/view/blog-post/res/view/new-post/new-post.component';
import { PopularNewsComponent } from './single-page/res/view/popular/res/view/popular-news/popular-news.component';
import { EventCardComponent } from './single-page/res/view/events/res/view/event-card/event-card.component';
import { MainUserCardComponent } from './chat/res/view/main-user/res/view/main-user-card/main-user-card.component';
import { UserCardComponent } from './chat/res/view/users/res/view/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstSliderComponent,
    BlogPostComponent,
    PopularComponent,
    EventsComponent,
    SubscribeComponent,
    FooterComponent,
    SinglePageComponent,
    SecondPageComponent,
    ListItemsComponent,
    ChatComponent,
    PersonalMessagesComponent,
    FilesComponent,
    MainUserComponent,
    UsersComponent,
    AddQuestionComponent,
    ChatHeaderComponent,
    LentaComponent,
    MainComponent,
    NewPostComponent,
    PopularNewsComponent,
    EventCardComponent,
    MainUserCardComponent,
    UserCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
