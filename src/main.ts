import { App } from "./app";
import "babylonjs-materials";
import "babylonjs-loaders";
import CANNON = require("cannon");

window.addEventListener("DOMContentLoaded", () => {
  // Set global variable for cannonjs physics engine
  window.CANNON = CANNON;
  let app = new App("renderCanvas");
  app.createScene();
  app.animate();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
