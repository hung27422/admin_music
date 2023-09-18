import classNames from "classnames/bind";

import styles from "./HandleSong.module.scss";
import { useContext, useEffect, useState } from "react";
import InputData from "./InputData/inputdata";
import MusicItemL from "../../components/MusicItem - L";
import { AdminContext } from "../../ContextAdmin/ContextAdmin";
const cx = classNames.bind(styles);

function HandleSong() {
  var newreleaseallAPI = "http://localhost:3000/newreleaseall";
  const { value, setValue } = useContext(AdminContext);
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch(newreleaseallAPI)
      .then((response) => response.json())
      .then((response) => {
        setValue(response);
        setSongs(response);
      });
  }, [newreleaseallAPI, setValue]);
  const addSongToList = (newSong) => {
    // Add the new song to the songs state.
    setSongs([...songs, newSong]);
  };
  const deleteSong = (id) => {
    var options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    var _newreleaseallAPI = newreleaseallAPI + "/" + id;
    fetch(_newreleaseallAPI, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setSongs(response);
      })
      .catch((error) => {
        console.error("Lỗi khi xóa bài hát:", error);
      });
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("form-data")}>
        <InputData onAddSong={addSongToList} />
      </div>
      <div className={cx("form-show-data")}>
        {value.map((value) => {
          return (
            <MusicItemL onDelete={deleteSong} data={value} key={value.id} />
          );
        })}
      </div>
    </div>
  );
}

export default HandleSong;
