import { useEffect, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Todos from "../components/Todos";

const Signup = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const history = useHistory();

  const handleTodos = () => {
    setLoader(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        setLoader(false);
        setData(response.data);
        console.log(response.data);
        setLoader(false);
      });
  };
  return (
    <div style={{ display: "flex" }}>
      <Button onClick={handleTodos}>Fetch Todos</Button>
      {/* {loader ? (
        <div>
          <h1>Loading....</h1>
        </div>
      ) : ( 
      <div style={{ display: "flex", alignItems: "center" }}>
        <ul>
          {data.map((item, index) => {
           
            <div style={{ alignItem: "center" }}>
              <h1>{item.title}</h1>
            </div>;
            <Todos title={item} />;
          })}
        </ul>
      </div>
      )} */}
      <Todos />
    </div>
  );
};
export default Signup;
