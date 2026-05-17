import { io } from "socket.io-client";
import {
  useState,
  createContext,
  useEffect,
} from "react";

export const SocketContext =
  createContext();

export const SocketContextProvider = ({
  children,
}) => {
  const [socket, setSocket] =
    useState(null);

  useEffect(() => {
    const socketInstance = io(
      "http://localhost:4000"
    );

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{ socket }}
    >
      {children}
    </SocketContext.Provider>
  );
};