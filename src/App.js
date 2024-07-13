import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <div className="nameAndLogo">
              <img src={gptLogo} alt="Logo" className="logo" />
              <span className="brand">ChatGPT</span>
            </div>
            <button className="midBtn">
              <img src={addBtn} alt="new chat" className="addBtn" />
              New Chat
            </button>
            <div className="upperSideBottom">
              <button className="query">
                <img src={msgIcon} alt="Query" />
                What is Programming ?
              </button>
              <button className="query">
                <img src={msgIcon} alt="Query" />
                How to use an API ?
              </button>
            </div>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="chatgpt" />
            <p className="txt">Advantages of Asynchronous Programming in JavaScriptImproved Performance</p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="chatgpt" />
            <p className="txt">Advantages of Asynchronous Programming in JavaScriptImproved Performance: Non-blocking operations allow JavaScript applications to remain responsive and handle multiple tasks simultaneously.Better User Experience: Users don't experience freezes or delays, enhancing the overall usability of the application.Scalability: Asynchronous code can handle high volumes of concurrent tasks, making it suitable for web servers and real-time applications.Efficient Resource Use: Resources are used more efficiently by avoiding idle time waiting for I/O operations or network requests to complete. Common Use Cases enables the efficient handling of long-running operations without blocking the main thread. By leveraging callbacks, Promises, async/await, and Web APIs, developers can create responsive and performant web applications that provide a seamless user experience.</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" name="" id="" />
            <button className="send"><img src={sendBtn} alt="send button"/></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places, of facts. ChatGPT July 15 Version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
