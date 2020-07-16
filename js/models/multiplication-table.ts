class MultiplicationTable
{
    //Multiplication table to process
    private _table: number;
    public get table(): number { return this._table; };
    public set table(value: number) { this._table = value; };

    //Modulo value to apply for render the table
    private _modulo: number;
    public get modulo(): number { return this._modulo; };
    public set modulo(value: number) { this._modulo = value; }; 

    /**
     * Constructor
     * @param data Initialization data
     */
    constructor(data: any = null)
    {
        this._table = 100;
        this._modulo = 500;

        this.fromArray(data);
    }

    /**
     * Imports data from JS Object
     * @param data Data to import
     */
    fromArray(data: any)
    {
        if (data)
        {
            this._table = data.table ?? this._table;
            this._modulo = data.modulo ?? this._modulo;
        }
    }

    /**
     * Exports data to JS Object 
     */
    toArray(): any
    {
        return {
            table: this._table,
            modulo: this._modulo
        };
    }
}