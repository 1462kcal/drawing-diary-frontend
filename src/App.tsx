import Router from "./routes/Router";
import AuthInitializer from "./features/auth/components/AuthInitializer";

function App() {
  return (
    <AuthInitializer>
      <Router />
    </AuthInitializer>
  );
}

export default App;
