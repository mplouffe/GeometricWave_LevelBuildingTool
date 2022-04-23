class DesignBrush {
    constructor() {
        this.canvas = document.getElementById("design_brush_canvas");
        this.context = this.canvas.getContext("2d");
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;

        this.selector = document.getElementById("design_brush_selector");
        
        designBrushJson.options.forEach((option) => {
            let newOption = document.createElement("option");
            newOption.text = option.name;
            newOption.value = option.src;
            this.selector.add(newOption);
        });

        this.selector.onchange = this.updateDesignBrushCanvas.bind(this);

        this.image = new Image();
        this.image.src = './assets/Square_Fighter_01.png';
        this.image.onload = this.updateImage.bind(this);
    }

    updateDesignBrushCanvas() {
        this.image.src = this.selector.options[this.selector.selectedIndex].value;
    };

    updateImage() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        let imageX = (this.canvasWidth * 0.5) - (this.image.width * 0.5);
        let imageY = (this.canvasHeight * 0.5) - (this.image.height * 0.5);
        this.context.drawImage(this.image, imageX, imageY);
    }

    currentSelectedBrush() {
        return this.selector.options[this.selector.selectedIndex].value;
    }
}