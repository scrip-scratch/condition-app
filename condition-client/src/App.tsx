import { useEffect, useState } from "react";
import useRoutes from "./routes/useRoutes";
import "./App.css";

const App = () => {
  const routes = useRoutes();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <>
      {/* {loading && <Loader solid={true} />} */}
      {routes}
    </>
  );
};

export default App;
