import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function clickHandler(){
        setIsEditing(!isEditing);
    }

  return (
    <li>
      <span className="player">
        {isEditing ? <span><input placeholder="hello"/></span> : <span className="player-name">{name}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>Edit</button>
    </li>
  );
}
