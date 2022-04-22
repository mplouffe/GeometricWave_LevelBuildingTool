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

    updateDesignBrushCanvas(newValue) {
        this.image.src = this.selector.options[this.selector.selectedIndex].value;
    };

    updateImage() {
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
        let imageX = (this.canvasWidth / 2) - (this.image.width / 2);
        let imageY = (this.canvasHeight / 2) - (this.image.height / 2);
        this.context.drawImage(this.image, imageX, imageY);
    }

    currentSelectedBrush() {
        return this.selector.options[this.selector.selectedIndex].value;
    }
}