// default imports
import { useEffect } from "react";

// custom imports
import { AllRoutes } from "routes";

function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);

  const auth = true;

  return <AllRoutes auth={auth} />;
}

export default App;
