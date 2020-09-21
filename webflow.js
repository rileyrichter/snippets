// Only run after scripts (and HTML document) are ready
var Webflow = Webflow || [];
Webflow.push(function () {
  // DOMready has fired
  // May now use jQuery and Webflow api
});

// Snippet to keep code from running when the Editor is open
var Webflow = Webflow || [];
Webflow.push(function () {
  if (!Webflow.env("editor")) {
    // Run custom JS code here
  }
});

// redraw the slider
Webflow.require("slider").redraw();
// redraw tabs
Webflow.require("tabs").redraw();
