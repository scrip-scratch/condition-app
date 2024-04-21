import { useEffect, useState } from "react";
import useRoutes from "./routes/useRoutes";
import "./App.css";

const App = () => {
  const routes = useRoutes();
  const [loading, setLoading] = useState<boolean>(true);

  // const rootStyles: StyleSheet = {
  //   color: #fff,
  //   --main-text-color: #252526,
  // }

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <div>
      {/* {loading && <Loader solid={true} />} */}
      {routes}
    </div>
  );
};

export default App;
