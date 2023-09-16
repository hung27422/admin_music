import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content")}>
        <Sidebar />
        <div className={cx("page")}> {children} </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
