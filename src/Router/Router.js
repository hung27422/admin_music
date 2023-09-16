import configs from "../Configs/config";
import DashBoard from "../Pages/DashBoard";
import HandleSong from "../Pages/HandleSong";

const publicRoutes = [
  { path: configs.router.dashboard, component: DashBoard },
  { path: configs.router.handlesong, component: HandleSong },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
