import React, {createContext, useState, useContext, useEffect} from "react";
import {StoredKeys} from "../constants/StoredKeys";

const AuthContext = createContext({});

const AuthProvider = ({children}) => {
  const [authData, setAuthData] = useState({
    authData: {
      token: "",
      email: "",
      name: "",
      device_name: "browser"
    },
    signIn: () => null,
    signOut: () => null,
  });

  useEffect(() => {
    //Every time the App is opened, this provider is rendered
    //and call de loadStorage function.
    loadStorageData();
  }, []);

  function loadStorageData() {
    try {
      const authDataSerialized = localStorage.getItem(StoredKeys.AUTH_DATA);
      if (authDataSerialized) {
        setAuthData(JSON.parse(authDataSerialized));
      }
    } catch (e) {
      console.error('Error loading storage data.', e);
    }
  }

  const signIn = () => {
    // Call the service passing credential (email and password).
    // In a real App this data will be provided by the user from some InputText components.
    return {};
  }

  const signOut = () => {
    // Call the service passing credential (email and password).
    // In a real App this data will be provided by the user from some InputText components.
    localStorage.removeItem(StoredKeys.AUTH_DATA);
    return {};
  }

  return (
    <AuthContext.Provider value={{authData, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;


