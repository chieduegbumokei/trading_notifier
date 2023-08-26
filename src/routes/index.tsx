import MainLayout from "components/layouts/main/MainLayout";
import { INITIAL_ROUTE } from "constants/paths";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./utils";
import { useAppDispatch } from "store/hooks";
import { getUser } from "store/apis/users";

const Router: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<span>Loading...</span>}>
        <Routes>
          <Route path={INITIAL_ROUTE} element={<MainLayout />}>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
