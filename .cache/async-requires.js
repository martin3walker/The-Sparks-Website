// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("/Users/martinwalker/Development/nathan-band/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/martinwalker/Development/nathan-band/.cache/data.json")

