import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { routes } from "./router";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <>
            {routes.map((item, index) => {
              if (item?.children) {
                return (
                  <Route key={item.path + index} element={<item.component />}>
                    {item.children.map((child, childIndex) => {
                      return (
                        <Route
                          key={child.path + childIndex}
                          path={child.path}
                          element={<child.component />}
                        />
                      );
                    })}
                  </Route>
                );
              } else {
                return (
                  <Route
                    key={item.path + index}
                    path={item.path}
                    element={<item.component />}
                  />
                );
              }
            })}
          </>
        </Routes>
      </Router>
    </>
  );
};
export default App;
