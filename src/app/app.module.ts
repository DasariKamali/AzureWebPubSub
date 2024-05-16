import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WebPubSubService } from './services/web-pubsub.service';
import { WebSocketService } from './services/websocket.service';

import { PublishComponent } from './components/publish/publish.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    PublishComponent, 
    SubscribeComponent 
  ],
  providers: [WebPubSubService, WebSocketService]
})
export class AppModule { }
