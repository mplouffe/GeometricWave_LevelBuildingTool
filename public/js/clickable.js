
class Clickable {
    constructor(image_src, scale) {

        this.scale = scale;
        this.image = new Image();
        this.image.src = image_src;
        this.image.onload = function() {
            console.log("onload called");
            this.scaledwidth = this.image.width/this.scale;
            this.scaledheight = this.image.height/this.scale
            this.halfscaledwidth = this.scaledwidth/2;
            this.halfscaledheight = this.scaledheight/2;
        }.bind(this);

        this.currentX = 10;
        this.currentY = 10;
        this.clicking = false;
    }

    imageonload() {

    }

    initImageSizes() {

    }

    setPosition(x, y) {
        this.currentX = x;
        this.currentY = y;
    }

    isInBounds(x, y) {
        return x >= this.currentX &&
                x <= this.currentX + this.scaledwidth &&
                y >= this.currentY &&
                y <= this.currentY + this.scaledheight;
    }

    drawClickable(context) {
        context.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.currentX, this.currentY, this.scaledwidth, this.scaledheight);
    }
}