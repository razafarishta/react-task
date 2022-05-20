import React from "react";

const TodosList = ({ data, onClick, handleRemove }) => {
  return (
    <ul
      key={data.key}
      onDoubleClick={() => handleRemove(data.title)}
      onClick={() => onClick(data.userId)}
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      style={{ listStyle: "none" }}
    >
      <li
        style={{ cursor: "pointer", alignContent: "flex-start" }}
        value={data.title}
      >
        {data.title}
      </li>
    </ul>
  );
};

export default TodosList;
