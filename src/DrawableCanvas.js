import CanvasDraw from "react-canvas-draw";

class DrawableCanvas extends CanvasDraw {
  getPNGBlob() {
    return new Promise(resolve => {
      this.canvas.drawing.toBlob(resolve, "image/png");
    });
  }
}

export default DrawableCanvas;
