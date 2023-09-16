import classNames from "classnames/bind";
import styles from "./MusicItemL.module.scss";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

function MusicItemL({ data }) {
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
              <span className={cx("name-single")}>{data.artist}, </span>
              {data.artist2 && (
                <span className={cx("name-single")}>{data.artist2}</span>
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
    </div>
  );
}

export default MusicItemL;
