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

class DisplayObjectContainer implements Drawable {
    array: Drawable[] = [];
    addChild(displayObject: DisplayObject) {
        this.array.push(displayObject);
    }
    draw(context2D: CanvasRenderingContext2D) {
        for (let drawable of this.array) {
            drawable.draw(context2D);
        }
    }
}

class DisplayObject implements Drawable {
    x = 0;
    y = 0;
    draw(context2D: CanvasRenderingContext2D) {
    }
}

class imageBitmap extends DisplayObject {
    image: HTMLImageElement;
    x = 0;
    y = 0;
    imageInfo = "";
    draw(context2D: CanvasRenderingContext2D) {
        context2D.drawImage(this.image, this.x, this.y);
    }
}

class TextField extends DisplayObject {
    x = 0;
    y = 0;
    color = "";
    text = "";

    draw(context2D: CanvasRenderingContext2D) {
        context2D.fillStyle = this.color;
        context2D.fillText(this.text, this.x, this.y);
    }
}

