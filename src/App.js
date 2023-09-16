import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Router/Router";
import DefaultLayout from "./Layout/DefaultLayout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((result, index) => {
            let Layout = DefaultLayout;
            const Page = result.component;
            return (
              <Route
                key={index}
                path={result.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
