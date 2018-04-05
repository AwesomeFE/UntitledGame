const app = document.querySelector("#app");
const loadingScript = document.querySelector("#loading");
const loadingScreen = document.querySelector(".loading-screen");
const progressValue = document.querySelector(".loading-screen .progress-val");
const stylesheet = document.createElement("link");

const vendorArray = [
  {
    url: "/public/mobile-game/javascripts/manifest.js",
    total: 0
  },
  {
    url: "/public/mobile-game/javascripts/vendor.js",
    total: 0
  },
  {
    url: "/public/mobile-game/javascripts/app.js",
    total: 0
  }
];

let scriptCount = 0;
let gameTotal = 0;

app.style.display = "none";
stylesheet.href = "/public/mobile-game/stylesheets/app.css";
stylesheet.rel = "stylesheet";
document.head.appendChild(stylesheet);

vendorArray.forEach((vendor, index) => {
  const xhr = new XMLHttpRequest();
  const url = vendor.url;

  xhr.addEventListener("progress", event => {
    if (!vendor.total) {
      gameTotal += event.total;
      vendor.total = event.total;
    }

    if (vendorArray.every(vendor => vendor.total)) {
      progressValue.style.width = `${event.loaded / gameTotal * 98}%`;
    }
  });

  xhr.addEventListener("load", () => {
    scriptCount++;

    if (scriptCount >= vendorArray.length) {
      excuteScript();
    }
  });

  xhr.addEventListener("error", e => {});

  xhr.open("GET", url);
  xhr.send();
});

function excuteScript() {
  app.style.display = "block";
  loadingScreen.style.display = "none";

  vendorArray.forEach((vendor, index) => {
    const script = document.createElement("script");
    script.src = vendor.url;
    script.type = "text/javascript";
    setTimeout(() => {
      document.body.appendChild(script);
    }, 500 * index);
  });
}
