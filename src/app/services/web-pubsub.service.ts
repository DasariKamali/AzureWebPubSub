import { Injectable } from '@angular/core';
import { WebPubSubServiceClient } from '@azure/web-pubsub';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebPubSubService {
  private hub = 'sample_pubsub';
  private serviceClient: WebPubSubServiceClient;

  constructor() {
    this.serviceClient = new WebPubSubServiceClient(environment.webPubSubConnectionString, this.hub);
  }

  async publishMessage(message: string): Promise<void> {
    await this.serviceClient.sendToAll(message, { contentType: 'text/plain' });
  }

  async getClientAccessToken(): Promise<string> {
    const token = await this.serviceClient.getClientAccessToken();
    return token.url;
  }
}
