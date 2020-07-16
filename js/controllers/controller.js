var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Controller = /** @class */ (function (_super) {
    __extends(Controller, _super);
    /**
     * Constructor
     */
    function Controller() {
        var _this = _super.call(this) || this;
        _this._table = new MultiplicationTable();
        _this.animate();
        return _this;
    }
    Object.defineProperty(Controller.prototype, "table", {
        get: function () { return this._table; },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * Update table data
     * @param values Data to use
     */
    Controller.prototype.updateTable = function (values) {
        this._table.fromArray(values);
        this.notify();
    };
    /**
     * Increase the value of the table used to produce the drawing
     */
    Controller.prototype.animate = function () {
        var _this = this;
        this._table.table += 0.01;
        this.notify();
        setTimeout(function () { _this.animate(); }, 20);
    };
    return Controller;
}(Subject));
//# sourceMappingURL=controller.js.map