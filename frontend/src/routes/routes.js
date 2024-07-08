import config from "~/config";
import AuthLayout from "~/layouts/AuthLayout";
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
    layout: AuthLayout,
  },
  {
    path: config.routes.register,
    element: RegisterPage,
    layout: AuthLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
