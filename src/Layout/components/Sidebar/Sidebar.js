import "./Sidebar.module.scss";
import classNames from "classnames/bind";

import { Link } from "react-router-dom";

import images from "../../../assets/images/images";
import styles from "./Sidebar.module.scss";
import Menu from "./Menu";
import MenuItems from "./Menu/MenuItems";
import configs from "../../../Configs/config";
import { HomeIcon, AddIcon } from "../../../components/Icons";

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Link to={configs.router.dashboard} className={cx("info-logo")}>
          <img
            className={cx("icon-logo")}
            src={images.iconLogo}
            alt="iconlogo"
          />
          <img className={cx("logo")} src={images.logo} alt="logo" />
        </Link>
        <Menu>
          <MenuItems
            title="DashBoard"
            to={configs.router.dashboard}
            icon={<HomeIcon />}
          />
          <MenuItems
            title="HandleSong"
            to={configs.router.handlesong}
            icon={<AddIcon />}
          />
        </Menu>
      </div>
    </div>
  );
}

export default Sidebar;
