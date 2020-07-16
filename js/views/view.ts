class View implements Observer
{
    //Main controller of the application
    private _controller: Controller;

    //Canvas of the web page
    private _canvas: HTMLCanvasElement;

    /**
     * Constructor
     * @param controller Main controller of the application
     */
    constructor(controller: Controller)
    {
        this._controller = controller;
        this._controller.addObserver(this);

        this._canvas = <HTMLCanvasElement>document.querySelector('canvas');

        this.initializeEvents();

        this.resize();
        this.notify();
        this.draw();
    }

    /**
     * Initializes main events of the view
     */
    initializeEvents()
    {
        document.querySelectorAll('#txt-table, #txt-modulo').forEach((item) =>
        {
            item.addEventListener('input', () =>
            {
                this._controller.updateTable(this.getValues());
            });
        });

        window.addEventListener('resize', () =>
        {
            this.resize();
        });
    }

    /**
     * Resizes the canvas when window is resized
     */
    resize()
    {
        this._canvas.width = this._canvas.offsetWidth;
        this._canvas.height = this._canvas.offsetHeight;

        this.draw();
    }

    /**
     * Notification function of the view
     */
    notify()
    {
        this.refreshFields();
    }

    /**
     * Refresh fields value from the multiplication table data of the controller
     */
    refreshFields()
    {
        (<HTMLInputElement>document.querySelector('#txt-table')).value = this._controller.table.table.toFixed(3);
        (<HTMLInputElement>document.querySelector('#txt-modulo')).value = this._controller.table.modulo.toString();
    }

    /**
     * Returns fields values
     */
    getValues()
    {
        return {
            table: parseFloat((<HTMLInputElement>document.querySelector('#txt-table')).value),
            modulo: parseInt((<HTMLInputElement>document.querySelector('#txt-modulo')).value)
        }
    }

    /**
     * Draw the multiplication table
     */
    draw()
    {
        const radius = 300;
        const lineSize = 20;
        const modulo = this._controller.table.modulo;
        const angle = (Math.PI * 2) / modulo;

        //Gets the 2D context of the canvas. The context is used to draw shapes on the canvas
        let context = this._canvas.getContext('2d');

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
        for (let i = 0; i < modulo; ++i)
        {
            context.save();
            context.rotate(i * angle);

            context.beginPath();
            context.moveTo(0, radius);
            context.lineTo(0, radius - lineSize);
            context.stroke();

            context.restore();
        }

        //Drawing of the shape
        for (let i = 1; i < modulo; ++i)
        {
            let result = i * this._controller.table.table;

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

        window.requestAnimationFrame(() => { this.draw(); });
    }
}