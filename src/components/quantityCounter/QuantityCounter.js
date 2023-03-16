import React, { useEffect, useState } from "react";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";

function QuantityCounter({ id, updateQuantity, quantity }) {
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    updateQuantity(id, count);
  }, [count]);

  return (
    <div className="quantity-container">
      <ButtonGroup size="small" aria-label="small outlined info button group">
        {count > 0 && (
          <Button
            onClick={() => {
              if (count === 0) return;
              setCount(count - 1);
            }}
            variant="contained"
          >
            {"\u2212"}
          </Button>
        )}
        <Button color="primary">{quantity}</Button>
        <Button onClick={() => setCount(count + 1)} variant="contained">
          +
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default QuantityCounter;
