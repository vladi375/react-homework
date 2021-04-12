import React, { useCallback, useEffect, useState } from "react";

const Option = ({ club, value, onChoose }) => {
  const [chosen, setChosen] = useState(false);

  const onClick = useCallback(
    (event) => {
      console.log(event);
      setChosen(event.target.checked);

      onChoose(event.target.checked, event.target.value);
    },
    [setChosen, onChoose]
  );

  return (
    <div>
      <p>
        <input
          type="radio"
          name="premier-league"
          value={value}
          checked={chosen}
          onChange={onClick}
        />
        {club}
      </p>
    </div>
  );
};

export default Option;
