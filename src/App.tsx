import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "@/pages/Home";
import Workshop from "@/pages/workshop-2026-06";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/workshop-2026-06" component={Workshop} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
