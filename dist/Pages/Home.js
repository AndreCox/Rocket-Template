import React from "../../_snowpack/pkg/react.js";
import {Button} from "../Components/index.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
function Home({}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "mb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center space-y-4 mt-12 text-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-white text-6xl text-center mb-2"
  }, "Rocket Template"), /* @__PURE__ */ React.createElement("h2", {
    className: "text-white text-3xl mb-2"
  }, "The Fastest Way to Build React Apps"), /* @__PURE__ */ React.createElement("p", {
    className: "text-white text-6xl hover:text-7xl transition-all pb-3 hover:pb-0"
  }, "🚀")), /* @__PURE__ */ React.createElement("div", {
    className: "text-[#35363a] text-2xl mt-12 flex lg:flex-row flex-col text-center justify-evenly space-y-10 lg:space-y-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white rounded-2xl flex basis-full flex-col mx-12 p-8 shadow-md shadow-black"
  }, "Cross Platform 📱", /* @__PURE__ */ React.createElement("p", {
    className: "text-xl mt-4 mb-4"
  }, "Build your website app once, Then build for both IOS and Android"), "Built In Helpers ⚛️", /* @__PURE__ */ React.createElement("p", {
    className: "text-xl mt-4 mb-4"
  }, "Comes with React, Routing, and Tailwind CSS out of the box. MobX state management coming soon!"), "Lightning Fast Development ⚡", /* @__PURE__ */ React.createElement("p", {
    className: "text-xl mt-4 mb-4"
  }, "Uses React Hooks and TypeScript to speed up development. Snowpack by default for bundling no more waiting for your builds to complete."), /* @__PURE__ */ React.createElement(Link, {
    to: "/about",
    className: "mt-auto"
  }, /* @__PURE__ */ React.createElement(Button, {
    text: "Learn More"
  })))));
}
export default Home;
