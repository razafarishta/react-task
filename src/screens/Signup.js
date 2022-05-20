import { useEffect, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Todos from "../components/Todos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const history = useHistory();

  const notify = () => toast("Wow so easy!");

  const handleTodos = () => {
    setLoader(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {
        setLoader(false);
        setData(response.data);
        console.log(response.data, "resss");
        setLoader(false);
      });
  };

  const onClickTodo = (item) => {
    console.log(item, "item");
  };
  return (
    <div>
      <Button onClick={handleTodos}>Fetch Todos</Button>
      {loader ? (
        <div>
          <h1>Loading....</h1>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <ul>
            {data.map(
              (item, index) =>
                index < 5 && (
                  <div key={index} style={{ alignItem: "center" }}>
                    <button onClick={() => onClickTodo(item)}>
                      <h1>{item.title}</h1>
                    </button>
                  </div>

                  // <Todos title={item} />;
                )
            )}
          </ul>
        </div>
      )}
      {/* <Todos res={data} /> */}
    </div>
  );
};
export default Signup;
