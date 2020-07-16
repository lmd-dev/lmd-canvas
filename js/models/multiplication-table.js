var MultiplicationTable = /** @class */ (function () {
    /**
     * Constructor
     * @param data Initialization data
     */
    function MultiplicationTable(data) {
        if (data === void 0) { data = null; }
        this._table = 100;
        this._modulo = 500;
        this.fromArray(data);
    }
    Object.defineProperty(MultiplicationTable.prototype, "table", {
        get: function () { return this._table; },
        set: function (value) { this._table = value; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(MultiplicationTable.prototype, "modulo", {
        get: function () { return this._modulo; },
        set: function (value) { this._modulo = value; },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    /**
     * Imports data from JS Object
     * @param data Data to import
     */
    MultiplicationTable.prototype.fromArray = function (data) {
        var _a, _b;
        if (data) {
            this._table = (_a = data.table) !== null && _a !== void 0 ? _a : this._table;
            this._modulo = (_b = data.modulo) !== null && _b !== void 0 ? _b : this._modulo;
        }
    };
    /**
     * Exports data to JS Object
     */
    MultiplicationTable.prototype.toArray = function () {
        return {
            table: this._table,
            modulo: this._modulo
        };
    };
    return MultiplicationTable;
}());
//# sourceMappingURL=multiplication-table.js.map