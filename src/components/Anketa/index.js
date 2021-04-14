import React, { useEffect, useState } from "react";
import Option from "./Option";
import "./styles.css";

const answerOptions = [
  {
    id: 0,
    club: "Arsenal",
    value: "arsenal",
  },
  {
    id: 1,
    club: "Manchester United",
    value: "manutd",
  },
  {
    id: 2,
    club: "Liverpool",
    value: "liverpool",
  },
  {
    id: 3,
    club: "Manchester City",
    value: "mancity",
  },
];

const Anketa = ({ title }) => {
  const [result, setResult] = useState("");

  const onPressOption = (element) => {
    console.log("clicked on an option", element);

    if (element === "manutd") {
      setResult("success");
    } else {
      setResult("failure");
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {answerOptions.map((item) => {
          return (
            <Option
              key={item.id}
              club={item.club}
              value={item.value}
              onChoose={onPressOption}
            />
          );
        })}
      </div>
      <span className={`${result}`}></span>
    </div>
  );
};

export default Anketa;
