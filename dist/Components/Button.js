import React from "../../_snowpack/pkg/react.js";
function Button(props) {
  return /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl transition-all shadow shadow-blue-800 hover:shadow-black hover:scale-105",
    onClick: props.onClick
  }, props.text);
}
export default Button;
