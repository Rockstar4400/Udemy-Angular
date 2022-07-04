
export class LoggingService {
  lastlog: string;

  printLog(message: string) {
    //console.log(this.lastlog);
    this.lastlog = message;
  }
}
