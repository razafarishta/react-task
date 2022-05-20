
import Btn from "../components/Button";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { useEffect, useRef, useState } from "react";
import TodosList from "../components/List";
import Toast from "../components/Toast";
import styled, { css } from "styled-components";
const Home = () => {
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
        toastRef.current.handleToast(err.message);
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
        toastRef.current.handleToast(err.message);
      });
  };



  const handleUserInfo = (userId) => {
    console.log(userId);
    console.log(userData);

    console.log(userData.find((val) => val.id == userId));
    
      const SelectedUserData = userData.find((val) => val.id == userId);
      toastRef.current.handleToast(
        `${SelectedUserData.name} ${SelectedUserData.email}`
      );


  };

  const handleRemove = (title) => {
    
    var index = todosData.findIndex((val) => val.title == title);
   
    if (index > -1) {
      todosData.splice(index, 1);

      setTodosData([...todosData]);
    }
  };

  useEffect(() => {
    console.log(todosData, "in useEffcet");

    return () => {};
  }, [todosData]);

  return (
    <div className="App">
      <Btn onClick={handleClick} disabled={loader} />

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
      <Toast ref={toastRef} />
    </div>
  );
}
export default Home