import { Component } from '@angular/core';
import { PublishComponent } from './components/publish/publish.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [PublishComponent, SubscribeComponent]
})
export class AppComponent {
  title = 'angular-web-pubsub';
}
