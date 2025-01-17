import React, { useState } from "react";

import "./MemeForm.css";

const MemeForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredURL, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const memeData = {
      title: enteredTitle,
      amount: enteredURL,
      date: new Date(enteredDate),
    };

    props.onSaveMemeData(memeData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-meme__controls">
        <div className="new-meme__control">
          <label>Tytuł</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-meme__control">
          <label>URL</label>
          <input
            type="text"
            value={enteredURL}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-meme__control">
          <label>Data dodania</label>
          <input
            type="date"
            min="2020-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-meme_actions">
        <button type="submit">Dodaj Meme</button>
      </div>
    </form>
  );
};

export default MemeForm;
