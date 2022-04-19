
var designWindow;
function init() {
    designWindow = new DesignWindow();
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
