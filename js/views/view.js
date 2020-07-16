var View = /** @class */ (function () {
    /**
     * Constructor
     * @param controller Main controller of the application
     */
    function View(controller) {
        this._controller = controller;
        this._controller.addObserver(this);
        this._canvas = document.querySelector('canvas');
        this.initializeEvents();
        this.resize();
        this.notify();
        this.draw();
    }
    /**
     * Initializes main events of the view
     */
    View.prototype.initializeEvents = function () {
        var _this = this;
        document.querySelectorAll('#txt-table, #txt-modulo').forEach(function (item) {
            item.addEventListener('input', function () {
                _this._controller.updateTable(_this.getValues());
            });
        });
        window.addEventListener('resize', function () {
            _this.resize();
        });
    };
    /**
     * Resizes the canvas when window is resized
     */
    View.prototype.resize = function () {
        this._canvas.width = this._canvas.offsetWidth;
        this._canvas.height = this._canvas.offsetHeight;
        this.draw();
    };
    /**
     * Notification function of the view
     */
    View.prototype.notify = function () {
        this.refreshFields();
    };
    /**
     * Refresh fields value from the multiplication table data of the controller
     */
    View.prototype.refreshFields = function () {
        document.querySelector('#txt-table').value = this._controller.table.table.toFixed(3);
        document.querySelector('#txt-modulo').value = this._controller.table.modulo.toString();
    };
    /**
     * Returns fields values
     */
    View.prototype.getValues = function () {
        return {
            table: parseFloat(document.querySelector('#txt-table').value),
            modulo: parseInt(document.querySelector('#txt-modulo').value)
        };
    };
    /**
     * Draw the multiplication table
     */
    View.prototype.draw = function () {
        var _this = this;
        var radius = 300;
        var lineSize = 20;
        var modulo = this._controller.table.modulo;
        var angle = (Math.PI * 2) / modulo;
        //Gets the 2D context of the canvas. The context is used to draw shapes on the canvas
        var context = this._canvas.getContext('2d');
        //Clears the drawing area
        context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        //Saves the context before transform it
        context.save();
        //Translates the (0;0) coordinate to the center of the screen
        context.translate(this._canvas.width / 2, this._canvas.height / 2);
        //Reverses the Y axis
        context.scale(1, -1);
        //Draws the circle
        context.beginPath();
        context.arc(0, 0, radius, 0, 2 * Math.PI);
        context.strokeStyle = "#fff";
        context.stroke();
        //Drawing of graduations
        for (var i = 0; i < modulo; ++i) {
            context.save();
            context.rotate(i * angle);
            context.beginPath();
            context.moveTo(0, radius);
            context.lineTo(0, radius - lineSize);
            context.stroke();
            context.restore();
        }
        //Drawing of the shape
        for (var i = 1; i < modulo; ++i) {
            var result = i * this._controller.table.table;
            context.beginPath();
            context.save();
            context.rotate(i * angle);
            context.moveTo(0, radius);
            context.restore();
            context.save();
            context.rotate(result * angle);
            context.lineTo(0, radius);
            context.restore();
            context.stroke();
        }
        //REstores the context on its initial state
        context.restore();
        window.requestAnimationFrame(function () { _this.draw(); });
    };
    return View;
}());
//# sourceMappingURL=view.js.map