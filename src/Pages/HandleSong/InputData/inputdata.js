import classNames from "classnames/bind";

import styles from "./inputdata.module.scss";
const cx = classNames.bind(styles);

function InputData() {
  return (
    <div className={cx("wrapper")}>
      <form className={cx("form-group")}>
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập tên bài hát:</label>
          <input className={cx("input-data")} type="text" value="" />
        </div>
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập tên tác giả 1:</label>
          <input className={cx("input-data")} type="text" />
        </div>
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập tên tác giả 2:</label>
          <input className={cx("input-data")} type="text" />
        </div>
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập tên tác giả 3:</label>
          <input className={cx("input-data")} type="text" />
        </div>{" "}
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập loại album:</label>
          <input className={cx("input-data")} type="text" />
        </div>{" "}
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập duration:</label>
          <input className={cx("input-data")} type="text" />
        </div>{" "}
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập category:</label>
          <input className={cx("input-data")} type="text" />
        </div>
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập avatar:</label>
          <input className={cx("input-data")} type="text" />
        </div>
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập media:</label>
          <input className={cx("input-data")} type="text" />
        </div>
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập column:</label>
          <input className={cx("input-data")} type="text" />
        </div>
        <button className={cx("btn-submit")}>Thêm bài hát</button>
      </form>
    </div>
  );
}

export default InputData;
