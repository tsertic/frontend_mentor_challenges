"use client";
interface IReduxProvider {
  children: React.ReactNode;
}
import store from "@/app/_redux/store";
import { Provider } from "react-redux";

export const ReduxProvider: React.FC<IReduxProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
