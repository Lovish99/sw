import { clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";
// import { precacheAndRoute } from "workbox-precaching/precacheAndRoute";

// precacheAndRoute([
//   { url: "./App.js", revision: "383676" },
//   { url: "/", revision: "383679" },
//   //   { url: "/styles/app.0c9a31.css", revision: null },
//   //   { url: "/scripts/app.0d5770.js", revision: null },
//   // ... other entries ...
// ]);

//this clientClainm( ) should be at the top level of your service worker , not inside of an event handler

clientsClaim();

self.skipWaiting();

precacheAndRoute(self.__WB_MANIFEST);
