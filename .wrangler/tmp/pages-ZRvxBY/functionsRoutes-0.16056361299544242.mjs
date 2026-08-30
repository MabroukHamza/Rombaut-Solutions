import { onRequestGet as __reviews_js_onRequestGet } from "C:\\Users\\hamza.mabrouk\\RS\\Rombaut-Solutions\\functions\\reviews.js"
import { onRequestPost as __reviews_js_onRequestPost } from "C:\\Users\\hamza.mabrouk\\RS\\Rombaut-Solutions\\functions\\reviews.js"
import { onRequestPost as __send_js_onRequestPost } from "C:\\Users\\hamza.mabrouk\\RS\\Rombaut-Solutions\\functions\\send.js"

export const routes = [
    {
      routePath: "/reviews",
      mountPath: "/",
      method: "GET",
      middlewares: [],
      modules: [__reviews_js_onRequestGet],
    },
  {
      routePath: "/reviews",
      mountPath: "/",
      method: "POST",
      middlewares: [],
      modules: [__reviews_js_onRequestPost],
    },
  {
      routePath: "/send",
      mountPath: "/",
      method: "POST",
      middlewares: [],
      modules: [__send_js_onRequestPost],
    },
  ]