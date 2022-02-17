import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import RouteWrapper from "../RouteWrapper";

const generateRoute = (routers) => {
  return routers.map((item) => {
    if (item.children) {
      return generateRoute(item.children);
    }
    const { element: Element } = item;

    return (
      <Route
        path={item.path}
        key={item.name}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <RouteWrapper element={<Element />} title={item.title} />
          </Suspense>
        }
      />
    );
  });
};

export { generateRoute };
