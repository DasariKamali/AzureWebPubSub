import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebSocketService } from '../../services/websocket.service';
import { WebPubSubService } from '../../services/web-pubsub.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class SubscribeComponent implements OnInit, OnDestroy {
  constructor(
    private webSocketService: WebSocketService,
    private webPubSubService: WebPubSubService
  ) {}

  async ngOnInit(): Promise<void> {
    const url = await this.webPubSubService.getClientAccessToken();
    this.webSocketService.connect(url);
  }

  ngOnDestroy(): void {
    this.webSocketService.disconnect();
  }
}
