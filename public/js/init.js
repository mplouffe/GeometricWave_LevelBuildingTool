
var designWindow;
var designBrush;
var propertiesWindow;

function init() {
    designBrush = new DesignBrush();
    propertiesWindow = new PropertiesWindow();
    designWindow = new DesignWindow(designBrush, propertiesWindow);
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
