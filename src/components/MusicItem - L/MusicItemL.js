import classNames from "classnames/bind";
import styles from "./MusicItemL.module.scss";
import "tippy.js/dist/tippy.css";
import Button from "../Button/Button";
import { useContext, useEffect } from "react";
import { AdminContext } from "../../ContextAdmin/ContextAdmin";

const cx = classNames.bind(styles);

function MusicItemL({ data, onDelete }) {
  const { value, setValue } = useContext(AdminContext);

  const handleDeleteSong = (id) => {
    onDelete(id);
    const updatedSongs = value.filter((song) => song.id !== id);
    setValue(updatedSongs);
  };
  if (data === undefined) {
    return <>./..</>;
  }
  return (
    <div className={cx("wrapper")}>
      <div className={cx("media-left")}>
        <div className={cx("info-music")}>
          <img className={cx("avatar")} src={data.avatar} alt={data.title} />
          <div className={cx("info-playlist")}>
            <p className={cx("name-song")}>{data.title}</p>
            <div className={cx("info-single")}>
              <span className={cx("name-single")}>{data.artist}</span>
              {data.artist1 && (
                <span className={cx("name-single")}>{data.artist1}</span>
              )}
              {data.artist2 && (
                <span className={cx("name-single")}>{data.artist2}</span>
              )}
              {data.artist3 && (
                <span className={cx("name-single")}>{data.artist3}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={cx("media-mid")}>
        <span className={cx("info-song")}>{data.title} (Single)</span>
      </div>
      <div className={cx("media-right")}>
        <div className={cx("duration-song")}>
          <span>{data.duration}</span>
        </div>
      </div>
      <div className={cx("btn-handle")}>
        <Button remove onClick={() => handleDeleteSong(data.id)}>
          Xóa
        </Button>
        <Button update>Sửa</Button>
      </div>
    </div>
  );
}

export default MusicItemL;
