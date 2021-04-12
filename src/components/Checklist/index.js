import React, { useState } from "react";
import Task from "./Task";
import PropTypes from "prop-types";
import "../../index.css";

const Checklist = ({ title, tasks }) => {
  const [trues, setTrues] = useState(0);

  const onClickTask = (checked) => {
    if (checked) {
      setTrues((trues) => {
        return trues + 1;
      });
    } else {
      setTrues((trues) => {
        return trues - 1;
      });
    }
  };

  const progressWidth = (trues / tasks.length) * 100;

  return (
    <div className="checklist">
      <h1>{title}</h1>

      <div className="loadbar">
        <div className="progress" style={{ width: `${progressWidth}%` }}></div>
      </div>

      {tasks.map((item) => {
        return <Task key={item.id} text={item.text} onPress={onClickTask} />;
      })}
    </div>
  );
};

Checklist.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    })
  ),
};

Checklist.defaultProps = {
  title: "Default name",
};

export default Checklist;
