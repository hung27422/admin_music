import classNames from "classnames/bind";

import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

function Header() {
  return <div className={cx("wrapper")}>
    <div className={cx('form-group')}>
        <div className={cx('group-item')}>
            <label>Nhập tên song:</label>
            <input type="text" name="" value=""/>
        </div>
    </div>
  </div>;
}

export default Header;
