import { setupQueues } from "./connection";
import { Publisher } from "@tychota/amqplib-plus";

// const onConnect = async () => console.log("test");

// export default class ConsoleLogger {
//   public log(message?: any, ...optionalParams: any[]): void {
//     console.log(message, optionalParams);
//   }
//   public info(message?: any, ...optionalParams: any[]): void {
//     this.log(message, optionalParams);
//   }
//   public warn(message?: any, ...optionalParams: any[]): void {
//     this.log(message, optionalParams);
//   }
//   public error(message?: any, ...optionalParams: any[]): void {
//     this.log(message, optionalParams);
//   }
// }

setupQueues();
// const client = new Publisher(connection, onConnect, true, new ConsoleLogger());
