import React, { createContext, useEffect, useState } from "react";

export const ProfContext = createContext();

export const ProfProvider = (props) => {
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(props);
  }, [props]);
  return (
    <ProfContext.Provider value={user}>{props.children}</ProfContext.Provider>
  );
};
