import * as express from 'express';
import { Application } from "express";
import { createServer, Server as HTTPServer } from "http";
import * as path from "path";
import { studentData } from "./routes/studentData";

export class Server {
  private httpServer: HTTPServer;
  private app: Application;

  private readonly DEFAULT_PORT = process.env.PORT as unknown as number || 8080;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.app = express();
    this.httpServer = createServer(this.app);

    this.configureApp();
    this.configureRoutes();
  }

  private configureApp(): void {
    this.app.use(express.static(path.join(__dirname, "/client/build", "index.html")));
  }

  private configureRoutes(): void {
    this.app.get("/studentData", studentData)
    this.app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
  }

  public listen(callback: (port: number) => void): void {
    this.httpServer.listen(this.DEFAULT_PORT, () => {
      callback(this.DEFAULT_PORT);
    });
  }
}
