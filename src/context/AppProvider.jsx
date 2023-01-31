/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext} from "react";

import {AuthContext} from "./AuthProvider";
import useFireStore from "../hooks/useFireStore";

export const AppContext = createContext();

export default function AppProvider({children}) {
  const {
    user: {uid}
  } = React.useContext(AuthContext);
  /**
   * name: "abc",
   * description: """,
   * members: [uid]
   *
   */
  const condition = React.useMemo(() => {
    return {
      fieldName: "members",
      operator: "array-contains",
      compareValue: uid
    };
  }, [uid]);
  const rooms = useFireStore("rooms", condition);
  return <AppContext.Provider value={{rooms}}>{children}</AppContext.Provider>;
}
