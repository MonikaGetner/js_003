export default class Router
{
    constructor() {
        this.routes = {};
    }

    setRoute(path, component) {
        this.routes[path] = component;
    }

    observe() {
        window.addEventListener("hashchange", () => {

            if(this.routes.hasOwnProperty(window.location.hash)) {
                new this.routes[window.location.hash]()
            }

        });
    }
}