import React from "react";
import "./style.css";

const Input = ({ name, age, city }) => {
  console.log({ name, age, city });
  const input = <input className="input" type="text" />;
  return (
    <div>
      {input}

      {name}

      {age}

      {city}
    </div>
  );
};
export default Input;
