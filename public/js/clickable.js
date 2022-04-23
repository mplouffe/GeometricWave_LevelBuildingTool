
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

        this.properties = {
            positionX: startingX,
            positionY: startingY
        }
        this.clicking = false;
    }

    setPosition(x, y) {
        this.properties.positionX = x;
        this.properties.positionY = y;
    }

    isInBounds(x, y) {

        return x >= this.properties.positionX &&
                x <= this.properties.positionX + this.scaledwidth &&
                y >= this.properties.positionY &&
                y <= this.properties.positionY + this.scaledheight;
    }

    drawClickable(context) {
        context.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.properties.positionX, this.properties.positionY, this.scaledwidth, this.scaledheight);
    }
}