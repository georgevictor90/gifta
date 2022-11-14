import React from "react";

function Sidebar({ data }) {
  const categories = [];
  data.forEach((prod) => {
    if (categories.includes(prod.category)) return;
    categories.push(prod.category);
  });

  const listItems = categories.map((categ) => {
    return <li key={categ}>{categ}</li>;
  });

  return (
    <div className="sidebar">
      <h5>Categories</h5>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Sidebar;
