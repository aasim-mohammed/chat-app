import { useState, useRef } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

import Cookies from "universal-cookie";
import Chat from "./components/chat";
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  const signOutUser = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <div className="App ">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div>
      {room ? (
        <div>
          <Chat room={room} />
        </div>
      ) : (
        <div className="room">
          <label>Enter Room Name</label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </button>
        </div>
      )}

      <div className="sign-out">
        <button className="sign-out-button" onClick={signOutUser}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default App;
