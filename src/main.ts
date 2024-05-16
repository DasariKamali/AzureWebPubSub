import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { WebPubSubService } from './app/services/web-pubsub.service';
import { WebSocketService } from './app/services/websocket.service';

import { PublishComponent } from './app/components/publish/publish.component';
import { SubscribeComponent } from './app/components/subscribe/subscribe.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule, PublishComponent, SubscribeComponent),
    WebPubSubService,
    WebSocketService
  ]
})
.catch(err => console.error(err));
