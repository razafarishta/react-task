import React from "react";
const Todos = (...props) => {
  console.log(props, "propsssssss");
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     flex: 1,
    //     color: "red",
    //     width: 600,
    //     height: 800,
    //   }}
    // >
    <>
      {/* <h2>aosdkasd;klasdl</h2> */}
      <li>
        <h2 style={{ width: 600, height: 800 }}>{props.title}</h2>
      </li>
    </>
    // </div>
  );
};
export default Todos;
