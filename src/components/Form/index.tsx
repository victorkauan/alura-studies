import React from "react";
import Button from "../Button";

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="task">Add a new study</label>
          <input
            id="task"
            name="task"
            type="text"
            placeholder="What do you want to study?"
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            id="time"
            name="time"
            type="time"
            step="1"
            min="00:00:00"
            max="01:30:00"
            placeholder="What do you want to study?"
            required
          />
        </div>
        <Button />
      </form>
    )
  }
}
