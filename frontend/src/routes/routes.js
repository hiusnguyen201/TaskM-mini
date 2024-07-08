import config from "~/config";
import HomePage from "~/pages/Home";
import LoginPage from "~/pages/Login";
import RegisterPage from "~/pages/Register";

const publicRoutes = [
  {
    path: config.routes.home,
    element: HomePage,
  },
  {
    path: config.routes.login,
    element: LoginPage,
    layout: null,
  },
  {
    path: config.routes.register,
    element: RegisterPage,
    layout: null,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
