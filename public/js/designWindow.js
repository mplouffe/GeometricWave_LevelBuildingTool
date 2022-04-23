
class DesignWindow {

    constructor(designBrush, propertiesWindow) {
        this.canvas = document.getElementById("design_canvas");
        this.context = this.canvas.getContext("2d");
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;

        this.designBrush = designBrush;
        this.propertiesWindow = propertiesWindow;

        this.clickables = [];

        this.playerShip = new Clickable('./assets/Triangle_Fighter_02.png', 10, 10, 10);
        this.clickables.push(this.playerShip);

        this.isDragging = false;

        this.selectedElement = null;
    }

    clear() {
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    }

    drawDesignCanvasGrid()
    {
        this.context.save();
        this.context.strokeStyle = 'rgba(0, 0, 0, 0.25)';
        this.context.lineWidth = 1;
    
        this.context.beginPath();
        for (let x = 0; x <= this.canvasWidth; x += 4) {
            this.context.moveTo(x, 0);
            this.context.lineTo(x, this.canvasHeight);
        }
        for (let y = 0; y <= this.canvasHeight; y += 4) {
            this.context.moveTo(0, y);
            this.context.lineTo(this.canvasWidth, y);
        }
        this.context.stroke();
        this.context.restore();
    }

    drawScreenPreviewRect(startY) {
        this.context.save();
        this.context.beginPath();
        this.context.strokeStyle = "red";
        this.context.strokeRect(0, startY, 428, 240);
        this.context.restore();
    }
    
    mouseEvents() {
        this.canvas.onmousedown = function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.clickConsumed = false;
            let clickX = e.pageX - this.canvas.offsetLeft;
            let clickY = e.pageY - this.canvas.offsetTop;
            this.clickables.forEach((clickable) => {
                clickable.clicking = clickable.isInBounds(clickX, clickY);
                if (clickable.clicking) {
                    this.clickConsumed = true;
                    this.selectedElement = clickable;
                    this.propertiesWindow.updatePropertiesWindow(clickable);
                    this.propertiesWindow.updatePropertiesDetails(clickable);
                }
            });
            if (!this.clickConsumed) {
                let src = this.designBrush.currentSelectedBrush();
                let newElement = new Clickable(src, 10, clickX, clickY);
                this.clickables.push(newElement);
                this.propertiesWindow.updatePropertiesWindow(newElement);
                this.propertiesWindow.updatePropertiesDetails(newElement);
                this.selectedElement = newElement;
            }
        }.bind(this);

        this.canvas.onmousemove = function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.clickables.forEach((clickable) => {
                if (clickable.clicking) {
                    let newX = e.pageX - this.canvas.offsetLeft - clickable.halfscaledwidth;
                    let newY = e.pageY - this.canvas.offsetTop - clickable.halfscaledheight;
                    clickable.setPosition(newX, newY);
                    this.propertiesWindow.updatePropertiesDetails(clickable);
                }
            });
          }.bind(this);

          this.canvas.onmouseup = function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.clickables.forEach((clickable) => { clickable.clicking = false; });
          }.bind(this);

          this.canvas.onmouseout = function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.clickables.forEach((clickable) => { clickable.clicking = false; });
          }.bind(this);

          document.onkeydown = function(e) {
              if (e.code === "Backspace" && this.selectedElement != null) {
                  let index = this.clickables.indexOf(this.selectedElement);
                  if (index > -1) {
                      this.clickables.splice(index, 1);
                      this.selectedElement = null;
                      this.propertiesWindow.clearPropertiesWindow();
                  }
              }
          }.bind(this);
    }

    drawClickables() {
        this.clickables.forEach((clickable) => {
            clickable.drawClickable(this.context);
        });
    }
}


