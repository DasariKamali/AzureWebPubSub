import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebPubSubService } from '../../services/web-pubsub.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class PublishComponent {
  message: string = '';

  constructor(private webPubSubService: WebPubSubService) {}

  async publish(): Promise<void> {
    await this.webPubSubService.publishMessage(this.message);
  }
}
