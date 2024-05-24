import Colors from "./Colors";

const Theme = {
  colors: Colors.reduce((acc, item) => {
    acc[item.label] = item.value;
    return acc;
  }, {}),
};

export default Theme;
