import { io } from "socket.io-client";

export const localhost = io("http://localhost:4000");

export const handleAddTicker = (ticker) => {
  localhost.emit("addTicker", ticker);
};
export const handleRemoveTicker = (ticker) => {
  localhost.emit("removeTicker", ticker);
};
