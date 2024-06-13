// components
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

// routes
import { HOME_PAGE, LOGIN_PAGE } from "../const/routes";

const RoutesMaster = [
  {
    path: HOME_PAGE,
    component: Home,
    isPrivate: true
  },
  {
    path: LOGIN_PAGE,
    component: Login,
    isPrivate: false
  },
];

export default RoutesMaster;
