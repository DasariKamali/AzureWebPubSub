import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any> | null = null;

  connect(url: string): void {
    if (this.isBrowser()) {
      this.socket$ = webSocket(url);
      this.socket$.subscribe(
        message => console.log('Message received: ', message),
        err => console.error('WebSocket error: ', err),
        () => console.log('WebSocket connection closed')
      );
    } else {
      console.error('WebSocket is not supported in this environment');
    }
  }

  disconnect(): void {
    if (this.socket$) {
      this.socket$.complete();
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof window.WebSocket !== 'undefined';
  }
}
