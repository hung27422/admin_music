import classNames from "classnames/bind";

import styles from "./HandleSong.module.scss";
import { useEffect, useState } from "react";
import InputData from "./InputData/inputdata";
import MusicItemL from "../../components/MusicItem - L";
const cx = classNames.bind(styles);

function HandleSong() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/newreleaseall")
      .then((response) => response.json())
      .then((response) => {
        setValue(response);
      });
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-data")}>
        <InputData />
      </div>
      <div className={cx("form-show-data")}>
        {value.map((value) => {
          return <MusicItemL data={value} key={value.id} />;
        })}
      </div>
    </div>
  );
}

export default HandleSong;
