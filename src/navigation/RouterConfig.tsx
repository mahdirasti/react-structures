import { Route, Routes } from "react-router-dom";

import LazyRoute from "./LazyRoute";
import PrivateRoute from "./PrivateRoute";
import React from "react";
import RouteNames from "./routeNames";

/**
 * All routes are placed here. If you wish to lazy load a page, refer to the example below
 * @example ```js
 * const UserDashboard = React.lazy(() => import("../panels/user/pages/Dashboard/index.tsx"))
 * .
 * .
 * .
 * <Route path="dashboard" element={<LazyRoute element={<UserDashboard />} />} />
 * ```
 * **Important note:**
 * You must export default the page and import that default export with `React.lazy` in order for lazy loading to work.
 */

const RouterConfig = () => {
  const { login } = RouteNames;
  return <Routes></Routes>;
};

export default RouterConfig;
