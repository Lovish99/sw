import { Workbox } from "workbox-window";

// function listenForWaitingServiceWorker(reg, callback) {
//   function awaitStateChange() {
//     reg.installing.addEventListener("statechange", function () {
//       if (this.state === "installed") callback(reg);
//     });
//   }
//   if (!reg) return;
//   if (reg.waiting) return callback(reg);
//   if (reg.installing) awaitStateChange();
//   reg.addEventListener("updatefound", awaitStateChange);
// }

export default function registerServiceWorker() {
  //   if ("production" !== "production webpack --mode=development") {
  //     return;
  //   }
  if ("serviceWorker" in navigator) {
    // const wb = new Workbox("/sw.js");

    // wb.addEventListener("activated", (event) => {
    //   // `event.isUpdate` will be true if another version of the service
    //   // worker was controlling the page when this version was registered.
    //   if (!event.isUpdate) {
    //     console.log("Service worker activated for the first time!");
    //     alert("Service worker activated for the first time!");
    //     // If your service worker is configured to precache assets, those
    //     // assets should all be available now.
    //   } else {
    //     if (
    //       window.confirm("New App update is available  , Click ok to refersh")
    //     ) {
    //       window.location.reload();
    //     }
    //   }
    // });

    // // Register the service worker after event listeners have been added.
    // wb.register();

    //first
    const wb = new Workbox("sw.js");
    console.log("abs1");
    // wb.addEventListener("activated", (event) => {
    //   console.log("aa");
    // });
    wb.addEventListener("installed", (event) => {
      console.log("abi1");
      if (event.isUpdate) {
        console.log("abi2");
        if (
          window.confirm("New App update is available  , Click ok to refersh")
        ) {
          window.location.reload();
        }
      }
    });
    // wb.addEventListener("controlling", (event) => {
    //   console.log("abc1");
    //   if (event.isUpdate) {
    //     console.log("abc2");
    //     if (
    //       window.confirm("New App update is available  , Click ok to refersh")
    //     ) {
    //       window.location.reload();
    //     }
    //   }
    // });
    // wb.addEventListener("activated", (event) => {
    //   console.log("aba1");
    //   if (event.isUpdate) {
    //     console.log("aba2");
    //     // if (
    //     //   window.confirm(
    //     //     "New App update is available  , Click ok to refersh"
    //     //   )
    //     // ) {
    //     //   window.location.reload();
    //     // }
    //   }
    // });
    // wb.register();
    // console.log("abv3");
    //second
    //if ("serviceWorker" in navigator) {
    // window.addEventListener("load", () => {
    // const wb = new Workbox("/sw.js");
    // wb.addEventListener("installing", (event) => {
    //   console.log("installing", event);
    // });
    // wb.addEventListener("installed", (event) => {
    //   console.log("installed", event);
    // });
    // wb.addEventListener("activating", (event) => {
    //   console.log("activating", event);
    // });
    // wb.addEventListener("activated", (event) => {
    //   console.log("activated", event);
    // });
    // console.log(wb);
    // wb.register();
    // }
    // });
    //third
    // const wb = new Workbox("/sw.js");
    // let registration;
    // const showSkipWaitingPrompt = async (event) => {
    //   // Assuming the user accepted the update, set up a listener
    //   // that will reload the page as soon as the previously waiting
    //   // service worker has taken control.
    //   wb.addEventListener("controlling", () => {
    //     // At this point, reloading will ensure that the current
    //     // tab is loaded under the control of the new service worker.
    //     // Depending on your web app, you may want to auto-save or
    //     // persist transient state before triggering the reload.
    //     window.location.reload();
    //   });
    //   // When `event.wasWaitingBeforeRegister` is true, a previously
    //   // updated service worker is still waiting.
    //   // You may want to customize the UI prompt accordingly.
    //   // This code assumes your app has a promptForUpdate() method,
    //   // which returns true if the user wants to update.
    //   // Implementing this is app-specific; some examples are:
    //   // https://open-ui.org/components/alert.research or
    //   // https://open-ui.org/components/toast.research
    //   const updateAccepted = await promptForUpdate();
    //   if (updateAccepted) {
    //     wb.messageSkipWaiting();
    //   }
    // };
    // // Add an event listener to detect when the registered
    // // service worker has installed but is waiting to activate.
    // wb.addEventListener("waiting", (event) => {
    //   showSkipWaitingPrompt(event);
    // });
    // wb.register();
    // }
    //fourth
    // if ("serviceWorker" in navigator) {
    //   const wb = new Workbox("sw.js");
    //   wb.addEventListener("message", (messageEvent) => {
    //     if (messageEvent.data === "skipWaiting") return skipWaiting();
    //   });

    //   // reload once when the new Service Worker starts activating
    //   var refreshing;
    //   navigator.serviceWorker.addEventListener("controllerchange", function () {
    //     if (refreshing) return;
    //     refreshing = true;
    //     window.location.reload();
    //   });
    //   function promptUserToRefresh(reg) {
    //     // this is just an example
    //     // don't use window.confirm in real life; it's terrible
    //     if (window.confirm("New version available! OK to refresh?")) {
    //       reg.waiting.postMessage("skipWaiting");
    //     }
    //   }
    //   listenForWaitingServiceWorker(wb, promptUserToRefresh);
    // }
  }
}
