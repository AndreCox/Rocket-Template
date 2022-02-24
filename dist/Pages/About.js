import React from "../../_snowpack/pkg/react.js";
import {observer} from "../../_snowpack/pkg/mobx-react-lite.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import {Button} from "../Components/index.js";
import {store} from "../Store.js";
const About = observer(() => {
  return /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-white text-6xl text-center mt-12"
  }, "Template Features"), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white rounded-2xl flex basis-full flex-col mx-12 p-8 shadow-md shadow-black mt-12"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-xl text-center"
  }, "Global State Management Using MobX"), /* @__PURE__ */ React.createElement("div", {
    className: "self-center mt-4"
  }, /* @__PURE__ */ React.createElement(Button, {
    text: "Update Value",
    onClick: () => {
      store.count++;
    }
  })), /* @__PURE__ */ React.createElement("p", {
    className: "text-center text-4xl font-bold mt-4"
  }, store.count), /* @__PURE__ */ React.createElement(Link, {
    to: "/about",
    className: ""
  })));
});
export default About;
