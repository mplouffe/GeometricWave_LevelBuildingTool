
var designWindow;
var designBrush;

function init() {
    designBrush = new DesignBrush();
    designWindow = new DesignWindow(designBrush);
    designWindow.mouseEvents();


    requestAnimationFrame(animate);
}

function animate() {
    designWindow.clear();
    designWindow.drawDesignCanvasGrid();
    designWindow.drawScreenPreviewRect(0);
    designWindow.drawClickables();
    requestAnimationFrame(animate);
}


window.addEventListener('load', init);
