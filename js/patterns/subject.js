var Subject = /** @class */ (function () {
    /**
     * Constructor
     */
    function Subject() {
        this._observers = new Array();
    }
    /**
     * Adds an observer to the subject
     * @param observer Observer to add
     */
    Subject.prototype.addObserver = function (observer) {
        this._observers.push(observer);
    };
    /**
     * Notifies all the observers of the subject
     * @param data Factultative - Data to send to the observers
     */
    Subject.prototype.notify = function (data) {
        if (data === void 0) { data = null; }
        this._observers.forEach(function (observer) {
            observer.notify(data);
        });
    };
    return Subject;
}());
//# sourceMappingURL=subject.js.map