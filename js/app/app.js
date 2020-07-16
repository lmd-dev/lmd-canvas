var Application = /** @class */ (function () {
    /**
     * Constructor
     */
    function Application() {
        this._controller = new Controller();
        this._view = new View(this._controller);
    }
    return Application;
}());
//Entry point of the web app
window.onload = function () { var app = new Application(); };
//# sourceMappingURL=app.js.map