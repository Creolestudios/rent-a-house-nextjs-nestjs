import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayDisconnect,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChildMessageEntity } from 'src/shared/entity/child-messages.entity';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway implements OnGatewayInit, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  afterInit() {
    console.log('WebSocket server initialized');
  }
  handleConnect(client: Socket) {
    console.log(client.id, 'Client.ID');
  }
  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }

  @SubscribeMessage('message to server')
  handleMessage(client: Socket, payload: any) {
    console.log('Received message from client :', payload);

    ChildMessageEntity.save({
      message_id: payload.id,
      to_id: payload.to_id,
      from_id: payload.from_id,
      text: payload.message,
    } as any);

    this.server.emit('received message from client', {
      message: 'Message received!',
    });
  }
}
