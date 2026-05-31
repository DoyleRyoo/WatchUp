import { useEffect } from "react";

import { socket } from "../services/socket/socket";

export default function useStockSocket(callback) {
  useEffect(() => {
    socket.on(
      "market:update",
      callback
    );

    return () => {
      socket.off(
        "market:update",
        callback
      );
    };
  }, [callback]);
}