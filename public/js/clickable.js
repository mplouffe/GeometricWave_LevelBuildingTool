
class Clickable {
    constructor(image_src, scale, startingX, startingY) {

        this.scale = scale;
        this.image = new Image();
        this.image.src = image_src;
        this.image.onload = function() {
            this.scaledwidth = this.image.width/this.scale;
            this.scaledheight = this.image.height/this.scale
            this.halfscaledwidth = this.scaledwidth/2;
            this.halfscaledheight = this.scaledheight/2;
        }.bind(this);

        this.drawPositionX = startingX;
        this.drawPositionY = startingY;

        this.properties = {
            positionX: (startingX + this.halfscaledwidth) / 4,
            positionY: (designCanvasLength - startingY - this.halfscaledheight) / 4
        }

        this.clicking = false;
    }

    setPosition(x, y) {
        this.drawPositionX = x;
        this.drawPositionY = y;

        this.properties.positionX = (x + this.halfscaledwidth) / 4;
        this.properties.positionY = (designCanvasLength - y - this.halfscaledheight) / 4;
    }

    isInBounds(x, y) {

        return x >= this.drawPositionX &&
                x <= this.drawPositionX + this.scaledwidth &&
                y >= this.drawPositionY &&
                y <= this.drawPositionY + this.scaledheight;
    }

    drawClickable(context) {
        context.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.drawPositionX, this.drawPositionY, this.scaledwidth, this.scaledheight);
    }
}