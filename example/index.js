var Console = /** @class */ (function () {
    function Console() {
        this.error = function (txt) {
            this.log(txt, "ERROR!");
        };
        this.textarea = document.createElement('textarea');
    }
    Console.prototype.log = function (txt, type) {
        if (type)
            this.textarea.value += type + " ";
        this.textarea.value += txt + "\n";
    };   
    Console.prototype.clear = function () {
        this.textarea.value = " ";
    };
    return Console;
}());
var console = new Console();
document.addEventListener('DOMContentLoaded', async function () {
    
    //
    // Bootstrapping
    //
    
    // Initialize our Console widget - it will log browser window.
    document
        .getElementById('consoleArea')
        .appendChild(console.textarea);

    

    // Test it:
    console.log("Browser: Hello!");

    try {
        
        if (window.Worker) {
            const dbWebWorker = new Worker("./worker.js", { type: "module" });
            let startWorkerButton = document.getElementById('startWorker')
            startWorkerButton.onclick = function () { dbWebWorker.postMessage({command:'init'}) };
            
            let stopWorkerButton = document.getElementById('stopWorker')
            stopWorkerButton.onclick =  function () { dbWebWorker.postMessage({command:'stop'}) };
            
            let clearConsoleButton = document.getElementById('clearConsole')
            clearConsoleButton.onclick = function () { console.clear(); };

            let pingWorkerButton = document.getElementById('pingWorker')
            pingWorkerButton.onclick = function () { dbWebWorker.postMessage({command:'ping'}) };
        
        
            dbWebWorker.onmessage = function(e) {
                console.log('web worker: ' + e.data);
            }
        } else {
            console.log('Your browser doesn\'t support web workers.')
        }
    } catch (ex) {
        console.error(ex);
    }
});

