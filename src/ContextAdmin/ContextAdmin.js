import { createContext, useState } from "react";
export const AdminContext = createContext();
function ContextAdmin({ children }) {
  const [value, setValue] = useState([]);
  const [listSong, setListSong] = useState([]);

  return (
    <AdminContext.Provider value={{ value, setValue }}>
      {children}
    </AdminContext.Provider>
  );
}

export default ContextAdmin;
