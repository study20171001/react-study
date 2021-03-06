import * as nextRoutes from 'next-routes'
const routeInstance = nextRoutes()

routeInstance.findAndGetUrls = function (nameOrUrl, params) {
  const route = this.findByName(nameOrUrl)
  if (route) {
    const {href, as} = route.getUrls(params)
    const urls = {href: href, as}
    return {route, urls, byName: true}
  } else {
    const {route, query} = this.match(nameOrUrl)
    const href = route ? route.getHref(query) : nameOrUrl
    const urls = {href: href, as: nameOrUrl}
    return {route, urls}
  }
}

export default routeInstance
