import React from "react";
let count = 0;
const TodosList = ({ data, onClick, handleRemove }) => {
  const onClickfunction = () => {
    count += 1;
    setTimeout(() => {
      if (count === 1) {
        onClick(data.userId);
      } else if (count === 2) {
        handleRemove(data.title);
      }
      count = 0;
    }, 300);
  }
  return (
    <ul
      key={data.key}

      onClick={onClickfunction}
    // sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      <li value={data.title}>{data.title}</li>
    </ul>
  );
};

export default TodosList;
