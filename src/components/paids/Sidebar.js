import React, { useState } from "react";

import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

export default function Sidebar() {
  const [addService, setAddService] = useState(false);
  const [addSpend, setAddSpend] = useState(false);

  const handleAddService = () => {
    setAddService(!addService);
  };

  const handleSubmitService = async () => {};

  const handleAddSpend = () => {
    setAddSpend(!addSpend);
  };

  return (
    <div className="sidebar">
      <div className="add-content">
        <h2>Add service</h2>
        {addService && (
          <form className="add-form" onSubmit={handleSubmitService}>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input-add"
            />
            <input type="submit" className="btn btn-add" value="Save" />
          </form>
        )}
        <button className="btn" onClick={() => handleAddService()}>
          {addService === true ? (
            <BsChevronCompactUp size="2em" />
          ) : (
            <BsChevronCompactDown size="2em" />
          )}
        </button>
      </div>
      <div className="add-content">
        <h2>Add spend</h2>
        {addSpend && (
          <form className="add-form">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input-add"
            />
            <input type="submit" className="btn btn-add" value="Save" />
          </form>
        )}
        <button className="btn" onClick={() => handleAddSpend()}>
          {addSpend === true ? (
            <BsChevronCompactUp size="2em" />
          ) : (
            <BsChevronCompactDown size="2em" />
          )}
        </button>
      </div>
    </div>
  );
}
