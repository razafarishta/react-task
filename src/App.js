import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Btn from "./components/Button";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { useEffect, useRef, useState } from "react";
import TodosList from "./components/List";
import Toast from "./components/Toast";
import styled, { css } from "styled-components";

function App() {
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [todosData, setTodosData] = useState([]);
  const [userData, setUserData] = useState([]);
  const toastRef = useRef();

  const handleClick = async () => {
    setLoader(true);
    await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodosData(data);
        getUserData();
      })
      .catch((err) => {
        setLoader(false);
        toastRef.current.handelToast(err.message);
      });
  };

  const getUserData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoader(false);
        setUserData(data);
      })
      .catch((err) => {
        setLoader(false);
        toastRef.current.handelToast(err.message);
      });
  };

  const handleUserInfo = (userId) => {
    console.log(userId);
    console.log(userData);
    console.log(userData.find((val) => val.id == userId));
    const SelectedUserData = userData.find((val) => val.id == userId);
    toastRef.current.handelToast(
      `${SelectedUserData.name} ${SelectedUserData.email}`
    );
  };

  const handleRemove = (title) => {
    console.log("onDoubleClick");
    var index = todosData.findIndex((val) => val.title == title);
    console.log(index, "index");
    if (index > -1) {
      todosData.splice(index, 1);

      console.log(todosData, "afterSplice");
      setTodosData([...todosData]);
    }
  };
  useEffect(() => {
    console.log(todosData, "in useEffcet");

    return () => {};
  }, [todosData]);

  return (
    <>
      <div class="header">
        <h3 class="logo">Todo Application</h3>
      </div>

      <div
        className={todosData.length > 0 ? "App todo_all_content" : ""}
        // style={{
        //   width: "80%",
        //   border: "2px solid black",
        //   padding: "20px",
        //   margin: "100px",
        // }}
      >
        <div
          className={
            todosData.length > 0
              ? "todo_inner_content_btn_success"
              : "todo_inner_content_btn"
          }
        >
          <Btn onClick={handleClick} disabled={loader} />
        </div>
        {todosData.length > 0 ? (
          <>
            <div className={todosData.length > 0 ? "todo_inner_content" : ""}>
              {message && <ErrorMessage msg={message} />}
              {todosData &&
                todosData.map((val, i) => (
                  <TodosList
                    data={val}
                    key={i}
                    onClick={handleUserInfo}
                    handleRemove={handleRemove}
                  />
                ))}
            </div>
          </>
        ) : (
          <></>
        )}
        <Toast ref={toastRef} />
      </div>
    </>
  );
}

export default App;
