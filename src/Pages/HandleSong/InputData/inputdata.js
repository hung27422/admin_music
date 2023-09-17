import classNames from "classnames/bind";

import styles from "./inputdata.module.scss";
import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../ContextAdmin/ContextAdmin";
const cx = classNames.bind(styles);

function InputData({ onAddSong }) {
  const [newSong, setNewSong] = useState({
    title: "",
    artist1: "",
    artist2: "",
    artist3: "",
    albumType: "",
    duration: "",
    category: "",
    avatar: "",
    media: "",
    column: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSong({ ...newSong, [name]: value });
  };

  const handleAddSong = () => {
    if (
      newSong.title &&
      newSong.albumType &&
      newSong.avatar &&
      newSong.media &&
      newSong.column &&
      newSong.category &&
      newSong.duration &&
      newSong.artist1 &&
      newSong.artist2 &&
      newSong.artist3
    ) {
      // Gửi thông tin bài hát lên máy chủ.
      fetch("http://localhost:3000/newreleaseall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSong), // Chuyển đổi thành JSON trước khi gửi lên.
      })
        .then((response) => response.json())
        .then((response) => {
          // Nếu thành công, response sẽ chứa danh sách bài hát đã được cập nhật.
          onAddSong(response);
          // Đặt lại trạng thái newSong để chuẩn bị cho việc thêm bài hát tiếp theo.
          setNewSong({
            title: "",
            author1: "",
            author2: "",
            author3: "",
            albumType: "",
            duration: "",
            category: "",
            avatar: "",
            media: "",
            column: "",
          });
        })
        .catch((error) => {
          console.error("Lỗi khi thêm bài hát:", error);
        });
    } else {
      // Hiển thị thông báo hoặc xử lý khi người dùng không điền đầy đủ thông tin.
      return;
    }
  };
  // useEffect(() => {
  //   console.log(value);
  // }, [value]);
  return (
    <div className={cx("wrapper")}>
      <form className={cx("form-group")}>
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập tên bài hát:</label>
          <input
            value={newSong.title}
            name="title"
            type="text"
            className={cx("input-data")}
            onChange={handleInputChange}
          />
        </div>
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập tên tác giả 1:</label>
          <input
            value={newSong.artist1}
            name="artist1"
            className={cx("input-data")}
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập tên tác giả 2:</label>
          <input
            value={newSong.artist2}
            name="artist2"
            className={cx("input-data")}
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập tên tác giả 3:</label>
          <input
            value={newSong.artist3}
            name="artist3"
            className={cx("input-data")}
            type="text"
            onChange={handleInputChange}
          />
        </div>{" "}
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập loại album:</label>
          <input
            value={newSong.albumType}
            name="albumType"
            className={cx("input-data")}
            type="text"
            onChange={handleInputChange}
          />
        </div>{" "}
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập duration:</label>
          <input
            value={newSong.duration}
            name="duration"
            className={cx("input-data")}
            type="text"
            onChange={handleInputChange}
          />
        </div>{" "}
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập category:</label>
          <input
            value={newSong.category}
            name="category"
            className={cx("input-data")}
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập avatar:</label>
          <input
            value={newSong.avatar}
            name="avatar"
            className={cx("input-data")}
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập media:</label>
          <input
            value={newSong.media}
            name="media"
            className={cx("input-data")}
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className={cx("group-item")}>
          <label className={cx("title")}>Nhập column:</label>
          <input
            value={newSong.column}
            name="column"
            className={cx("input-data")}
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <button className={cx("btn-submit")} onClick={handleAddSong}>
          Thêm bài hát
        </button>
      </form>
    </div>
  );
}

export default InputData;
