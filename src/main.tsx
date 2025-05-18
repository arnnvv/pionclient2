import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { StreamApp } from "./StreamApp";
import { Route, Switch } from "wouter";

const WatchAppLazy = lazy(() =>
  import("./WatchApp").then((module) => ({ default: module.WatchApp })),
);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <Switch>
      <Route path="/" component={StreamApp} />
      <Route path="/watch">
        <Suspense fallback={<>Loading...</>}>
          <WatchAppLazy />
        </Suspense>
      </Route>
    </Switch>
  </StrictMode>,
);
