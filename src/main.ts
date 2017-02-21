/*class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}*/

module math {


    export class Point {
        x: number;
        y: number;
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }

    export function pointAppendMatrix(point: Point, m: Matrix): Point {
        var x = m.a * point.x + m.c * point.y + m.tx;
        var y = m.b * point.x + m.d * point.y + m.ty;
        return new Point(x, y);

    }

    /**
     * 使用伴随矩阵法求逆矩阵
     * http://wenku.baidu.com/view/b0a9fed8ce2f0066f53322a9
     */
    export function invertMatrix(m: Matrix): Matrix {


        var a = m.a;
        var b = m.b;
        var c = m.c;
        var d = m.d;
        var tx = m.tx;
        var ty = m.ty;

        var determinant = a * d - b * c;
        var result = new Matrix(1, 0, 0, 1, 0, 0);
        if (determinant == 0) {
            throw new Error("no invert");
        }

        determinant = 1 / determinant;
        var k = result.a = d * determinant;
        b = result.b = -b * determinant;
        c = result.c = -c * determinant;
        d = result.d = a * determinant;
        result.tx = -(k * tx + c * ty);
        result.ty = -(b * tx + d * ty);
        return result;

    }

    export function matrixAppendMatrix(m1: Matrix, m2: Matrix): Matrix {

        var result = new Matrix();
        result.a = m1.a * m2.a + m1.b * m2.c;
        result.b = m1.a * m2.b + m1.b * m2.d;
        result.c = m2.a * m1.c + m2.c * m1.d;
        result.d = m2.b * m1.c + m1.d * m2.d;
        result.tx = m2.a * m1.tx + m2.c * m1.ty + m2.tx;
        result.ty = m2.b * m1.tx + m2.d * m1.ty + m2.ty;
        return result;
    }

    var PI = Math.PI;
    var HalfPI = PI / 2;
    var PacPI = PI + HalfPI;
    var TwoPI = PI * 2;
    var DEG_TO_RAD: number = Math.PI / 180;


    export class Matrix {

        constructor(a: number = 1, b: number = 0, c: number = 0, d: number = 1, tx: number = 0, ty: number = 0) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
        }

        public a: number;

        public b: number;

        public c: number;

        public d: number;

        public tx: number;

        public ty: number;

        public toString(): string {
            return "(a=" + this.a + ", b=" + this.b + ", c=" + this.c + ", d=" + this.d + ", tx=" + this.tx + ", ty=" + this.ty + ")";
        }

        updateFromDisplayObject(x: number, y: number, scaleX: number, scaleY: number, rotation: number) {
            this.tx = x;
            this.ty = y;
            var skewX, skewY;
            skewX = skewY = rotation / 180 * Math.PI;

            var u = Math.cos(skewX);
            var v = Math.sin(skewX);
            this.a = Math.cos(skewY) * scaleX;
            this.b = Math.sin(skewY) * scaleX;
            this.c = -v * scaleY;
            this.d = u * scaleY;

        }
    }
}

window.onload = () => {
    /*var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();*/

    //rect
    /*var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
    var rect = canvas.getContext("2d");
    rect.fillStyle="#FF0000";
    rect.fillRect(0,0,150,150);*/

    //angel
    /*var canvas=document.getElementById("myCanvas") as HTMLCanvasElement;*/
    /*var angel=canvas.getContext("2d");
    angel.strokeStyle="#00FF00"
    angel.moveTo(0,160);
    angel.lineTo(160,160);
    angel.lineTo(0,320);
    angel.stroke();*/

    //circle
    /*var canvas=document.getElementById("myCanvas") as HTMLCanvasElement;*/
    /*var circle=canvas.getContext("2d");
    circle.fillStyle="#FF0000";
    circle.beginPath();
    circle.arc(30,240,30,0,Math.PI,true);//x,y,r,start,line,direction
    circle.closePath();
    circle.fill();*/

    //colorchange
    /*var canvas=document.getElementById("myCanvas") as HTMLCanvasElement;*/
    /*var colorchange=canvas.getContext("2d");
    var grd=colorchange.createLinearGradient(0,330,175,50);//线形渐变 x0,y0,x1,y1
    grd.addColorStop(0,"#FF0000");
    grd.addColorStop(1,"#000000");
    colorchange.fillStyle=grd;
    colorchange.fillRect(0,330,175,50);*/

    //showimage
    /*var canvas=document.getElementById("myCanvas") as HTMLCanvasElement;
    var showimage=canvas.getContext("2d");
    var img=new Image();
    img.src="src/flower.jpg";
    img.onload = () => {
        //showimage.clearRect(0, 0, canvas.width, canvas.height);
        showimage.drawImage(img,160,0);
    }*/
    var canvas=document.getElementById("myCanvas") as HTMLCanvasElement;
    var context=canvas.getContext("2d");  

    var stage = new DisplayObjectContainer();
    
    
    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        stage.draw(context);
    }, 100)

    var image = document.createElement("img");
    image.src="src/flower.jpg"
    var Bitmap = new imageBitmap();
    Bitmap.image = image;
    Bitmap.x = 0;
    Bitmap.y = 0;

    var textField1 = new TextField();
    textField1.x = 20;
    textField1.y = 20;
    textField1.text = "Hello World";
    textField1.color = "#00FF00";

    image.onload = () => {
        stage.addChild(Bitmap);
        stage.addChild(textField1);
    }
};

interface Drawable {
    draw(context2D: CanvasRenderingContext2D);
}

class DisplayObjectContainer extends DisplayObject {
    array: Drawable[] = [];
    addChild(displayObject: DisplayObject) {
        if(this.array.indexOf(displayObject) == -1){
            this.array.push(displayObject);
            displayObject.parent = this;
        }        
    }
    removeChild(displayObject:DisplayObject){
        for(var element of this.array){
            if(element == displayObject){
                var index = this.array.indexOf(displayObject);
                this.array.splice(index);
                return;
            }
        }
    }
    render(context2D: CanvasRenderingContext2D) {
        for (let drawable of this.array) {
            drawable.draw(context2D);
        }
    }
}

class DisplayObject implements Drawable {
    x = 0;
    y = 0;

    scaleX = 1;
    scaleY = 1;
    rotation = 0;//     =1?
    
    matrix : math.Matrix = null;
    globalMatrix : math.Matrix = null;

    alpha = 1;
    globalAlpha = 1;
    parent : DisplayObject = null;

    constructor(){
        this.matrix = new math.Matrix();
        this.globalMatrix = new math.Matrix();
    }

    draw(context2D: CanvasRenderingContext2D) {
        this.matrix.updateFromDisplayObject(this.x, this.y, this.scaleX, this.scaleY,this.rotation);

        if(this.parent){
            this.globalAlpha = this.parent.globalAlpha * this.alpha;
            this.globalMatrix = math.matrixAppendMatrix(this.matrix, this.parent.globalMatrix);//?
        }else{
            this.globalAlpha = this.alpha;
            this.globalMatrix = this.matrix;
        }

        context2D.globalAlpha = this.globalAlpha;
        context2D.setTransform(this.globalMatrix.a, this.globalMatrix.b, this.globalMatrix.c, this.globalMatrix.d, this.globalMatrix.tx, this.globalMatrix.ty);
        this.render(context2D);
    }
    render(context2D : CanvasRenderingContext2D){

    }
}

class imageBitmap extends DisplayObject {
    image: HTMLImageElement;
    x = 0;
    y = 0;
    imageInfo = "";

    constructor(){
        super();
    }
    render(context2D: CanvasRenderingContext2D) {
        context2D.drawImage(this.image, this.x, this.y);
    }
}

class TextField extends DisplayObject {
    x = 0;
    y = 0;
    color = "";
    text = "";

    render(context2D: CanvasRenderingContext2D) {
        context2D.fillStyle = this.color;
        context2D.fillText(this.text, this.x, this.y);
    }
}

