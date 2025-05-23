import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StreamApp } from "./StreamApp";
import { WatchApp } from "./WatchApp";
import { Route, Switch } from "wouter";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <Switch>
      <Route path="/" component={StreamApp} />
      <Route path="/watch" component={WatchApp} />
    </Switch>
  </StrictMode>,
);
