class Controller extends Subject
{
    //Multiplication table to render
    private _table: MultiplicationTable;
    public get table(): MultiplicationTable { return this._table; };

    /**
     * Constructor
     */
    constructor()
    {
        super();

        this._table = new MultiplicationTable();
        this.animate();
    }

    /**
     * Update table data
     * @param values Data to use
     */
    updateTable(values: any)
    {
        this._table.fromArray(values);
        this.notify();
    }

    /**
     * Increase the value of the table used to produce the drawing 
     */
    animate()
    {
        this._table.table += 0.01;
        this.notify();

        setTimeout(() => { this.animate(); }, 20);

    }

}