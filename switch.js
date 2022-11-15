switchFunc = (temp) => {
  switch (temp) {
    case "high":
    case "very high":
      console.log("temperature is high");
      break;
    case "low":
      console.log("temperature is low");
      break;
    default:
      console.log("temperature is moderate");
      break;
  }
};

switchFunc("high"); //temperature is high
switchFunc("very high"); //temperature is high
switchFunc("low"); //temperature is low
switchFunc("moderate"); //temperature is moderate
