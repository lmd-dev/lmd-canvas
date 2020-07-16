class Application 
{
    //Main controller of the application
    private _controller: Controller;

    //Main view of the application
    private _view: View;

    /**
     * Constructor
     */
    constructor()
    {
        this._controller = new Controller();
        this._view = new View(this._controller);
    }
}

//Entry point of the web app
window.onload = () => { let app = new Application(); }