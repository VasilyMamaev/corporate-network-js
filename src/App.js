import React, { useEffect } from "react";
import Sidebar from "./components/sidebar/sidebar";
import ContactsPanel from "./components/contacts-panel/contacts-panel";
import Chat from "./components/chat/chat";
import { connect } from "react-redux";
import { initializeAppTC } from "./redux/contacts-reducer";

function App({initialized, initializeApp}) {

  useEffect(() => {
    initializeApp()
  }, [])
  return (
    <>
    {
    !initialized
      ? <p>loader stub</p>
      : <div className="mainWrapper">
          <Sidebar />
          <ContactsPanel />
          <Chat />
        </div>
    }
    </>
  );
}

const mapStateToProps = state => ({
  initialized: state.contacts.appInitialized
})

export default connect(mapStateToProps, {initializeApp: initializeAppTC}) (App);
