import React, { useState } from "react";

function TemperatureInput() {
  const [temperature, setTemperature] = useState("");
  return (
    <div>
      <input
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
      />
    </div>
  );
}

export default TemperatureInput;
