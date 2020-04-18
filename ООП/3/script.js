class Rectangle {

constructor(width, height) {
this.elem = document.createElement("div");
this._width = width;
this._height = height;

this.elem.style.width = this._width + 'px';
this.elem.style.height = this._height + 'px';

this.elem.style.border = '1px solid black';
document.body.appendChild(this.elem);

}


getWidth() {
return parseInt(this._width);
}

setWidth(value) {
this.elem.style.width = value + 'px';
}

getHeight() {
return parseInt(this._height);
}

setHeight(value) {
this.elem.style.height = value + 'px';
}
}

var rect = new Rectangle(300, 300);
console.log(rect.getWidth());
console.log(rect.getHeight());
