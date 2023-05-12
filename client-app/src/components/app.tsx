import { h } from "preact";
import { Route, Router } from "preact-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import ApplicationList from "../routes/applicationList";
import ApplicationDetails from "../routes/applicationDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div id="app">
      <Header />
      <main>
        <Router>
          <Route path="/" component={ApplicationList} />
          <Route
            path="/applications/:applicationId"
            component={ApplicationDetails}
          />
        </Router>
        <Toaster position="bottom-center" />
      </main>
    </div>
  </QueryClientProvider>
);

export default App;
