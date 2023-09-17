import classNames from "classnames/bind";

import styles from "./HandleSong.module.scss";
import { useContext, useEffect, useState } from "react";
import InputData from "./InputData/inputdata";
import MusicItemL from "../../components/MusicItem - L";
import { AdminContext } from "../../ContextAdmin/ContextAdmin";
const cx = classNames.bind(styles);

function HandleSong() {
  const { value, setValue } = useContext(AdminContext);
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/newreleaseall")
      .then((response) => response.json())
      .then((response) => {
        setValue(response);
        setSongs(response);
      });
  }, []);
  const addSongToList = (newSong) => {
    // Add the new song to the songs state.
    setSongs([...songs, newSong]);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-data")}>
        <InputData onAddSong={addSongToList} />
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
