import React, { useCallback } from "react";

const Option = ({ club, value, onChoose }) => {
  const onClick = useCallback(
    (event) => {
      console.log(event);

      onChoose(event.target.value);
    },
    [onChoose]
  );

  return (
    <div>
      <p>
        <input
          type="radio"
          name="premier-league"
          value={value}
          onChange={onClick}
        />
        {club}
      </p>
    </div>
  );
};

export default Option;
