class PropertiesWindow {
    constructor() {
        this.canvas = document.getElementById("properties_canvas");
        this.context = this.canvas.getContext("2d");
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;

        this.propertiesDetails = document.getElementById("properties_details");

        this.image = new Image();
        this.image.onload = this.updateImage.bind(this);
    }

    updatePropertiesWindow(selectedElement) {
        this.image.src = selectedElement.image.src;
    }

    updateImage() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        let imageX = (this.canvasWidth * 0.5) - (this.image.width * 0.5);
        let imageY = (this.canvasHeight * 0.5) - (this.image.height * 0.5);
        this.context.drawImage(this.image, imageX, imageY);
    }

    updatePropertiesDetails(selectedElement) {
        this.propertiesDetails.innerHTML = null;
        for (let property in selectedElement.properties) {
            let newPropertyRow = document.createElement("div");
            newPropertyRow.className = "property_row";
            let newPropertyLabel = document.createElement("h3");
            newPropertyLabel.className = "property_label";
            newPropertyLabel.textContent = property;
            let newPropertyValue = document.createElement("h4");
            newPropertyValue.className = "property_value";
            newPropertyValue.textContent = selectedElement.properties[property] | 0;

            newPropertyRow.appendChild(newPropertyLabel);
            newPropertyRow.appendChild(newPropertyValue);

            this.propertiesDetails.appendChild(newPropertyRow);
        }
    }

    clearPropertiesWindow() {
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.propertiesDetails.innerHTML = null;
    }
}