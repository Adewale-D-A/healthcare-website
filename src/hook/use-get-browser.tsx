"use client";

import { useState } from "react";

enum Browser {
  Firefox = "firefox",
  Chrome = "chrome",
  Safari = "safari",
  Edge = "edge",
  Rest = "rest",
}

export default function useGetBrowser() {
  const [browserType, setBrowserType] = useState<Browser>();
  const userAgent = navigator.userAgent;

  if (userAgent.includes("Firefox")) {
    // Target Firefox-specific behavior
    setBrowserType(Browser.Firefox);
  } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    // Target Safari
    setBrowserType(Browser.Safari);
  } else if (userAgent.includes("Edg")) {
    // Target Microsoft Edge
    setBrowserType(Browser.Edge);
  } else if (userAgent.includes("Chrome")) {
    // Target Chrome
    setBrowserType(Browser.Chrome);
  } else {
    setBrowserType(Browser.Rest);
  }

  return [browserType];
}
