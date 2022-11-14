import "./App.css";
import React from "react";
import RouteSwitch from "./components/RouteSwitch";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // const productNameListItems = data.map((product) => {
  //   return <li key={product.id}>{product.title}</li>;
  // });

  return (
    <div className="App">
      <RouteSwitch data={data} />
    </div>
  );
}

export default App;
