import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';

import { Message } from './model';

export interface ObjectIndexer<T> {
    [id: string]: T;
  }

export class ChatServer {
    public static readonly PORT:number = 8080;
    private app: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    private port: string | number;
    private connections: ObjectIndexer<object>;

    constructor() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
        this.connections = {};
    }

    private createApp(): void {
        this.app = express();
    }

    private createServer(): void {
        this.server = createServer(this.app);
    }

    private config(): void {
        this.port = process.env.PORT || ChatServer.PORT;
    }

    private sockets(): void {
        this.io = socketIo(this.server);
    }

    private listen(): void {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port);
        });

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', this.port);
            socket.on('message', (m: Message) => {
                console.log('[server](message): %s', JSON.stringify(m));
                if (m.action === 0) {
                   this.connections[socket.id] = m.from;
                   this.io.emit('list', this.connections);
                   console.log('list emitted');
                }
                this.io.emit('message', m);
            });

            socket.on('disconnect', () => {
                try { 
                    if (this.connections[socket.id]) {
                        delete this.connections[socket.id];
                        console.log(this.connections); 
                    }
                } catch (e) {
                    console.log(e.message);
                }                
                console.log('Client disconnected');
            });
        });
    }

    public getApp(): express.Application {
        return this.app;
    }
}
