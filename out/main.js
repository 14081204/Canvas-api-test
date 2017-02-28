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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _this = this;
var math;
(function (math) {
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        return Point;
    }());
    math.Point = Point;
    function pointAppendMatrix(point, m) {
        var x = m.a * point.x + m.c * point.y + m.tx;
        var y = m.b * point.x + m.d * point.y + m.ty;
        return new Point(x, y);
    }
    math.pointAppendMatrix = pointAppendMatrix;
    /**
     * 使用伴随矩阵法求逆矩阵
     * http://wenku.baidu.com/view/b0a9fed8ce2f0066f53322a9
     */
    function invertMatrix(m) {
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
    math.invertMatrix = invertMatrix;
    function matrixAppendMatrix(m1, m2) {
        var result = new Matrix();
        result.a = m1.a * m2.a + m1.b * m2.c;
        result.b = m1.a * m2.b + m1.b * m2.d;
        result.c = m2.a * m1.c + m2.c * m1.d;
        result.d = m2.b * m1.c + m1.d * m2.d;
        result.tx = m2.a * m1.tx + m2.c * m1.ty + m2.tx;
        result.ty = m2.b * m1.tx + m2.d * m1.ty + m2.ty;
        return result;
    }
    math.matrixAppendMatrix = matrixAppendMatrix;
    var PI = Math.PI;
    var HalfPI = PI / 2;
    var PacPI = PI + HalfPI;
    var TwoPI = PI * 2;
    var DEG_TO_RAD = Math.PI / 180;
    var Matrix = (function () {
        function Matrix(a, b, c, d, tx, ty) {
            if (a === void 0) { a = 1; }
            if (b === void 0) { b = 0; }
            if (c === void 0) { c = 0; }
            if (d === void 0) { d = 1; }
            if (tx === void 0) { tx = 0; }
            if (ty === void 0) { ty = 0; }
            this.a = a;
            this.b = b;
            this.c = c;
            this.d = d;
            this.tx = tx;
            this.ty = ty;
        }
        Matrix.prototype.toString = function () {
            return "(a=" + this.a + ", b=" + this.b + ", c=" + this.c + ", d=" + this.d + ", tx=" + this.tx + ", ty=" + this.ty + ")";
        };
        Matrix.prototype.updateFromDisplayObject = function (x, y, scaleX, scaleY, rotation) {
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
        };
        return Matrix;
    }());
    math.Matrix = Matrix;
    var Rectangle = (function () {
        function Rectangle() {
            this.x = 0;
            this.y = 0;
            this.width = 1;
            this.height = 1;
        }
        Rectangle.prototype.isPointInRectangle = function (x, y) {
            var point = new Point(x, y);
            var rect = this;
            if (point.x < rect.x + rect.width &&
                point.x > rect.x &&
                point.y < rect.y + rect.height &&
                point.y > rect.y) {
                return true;
            }
            else {
                return false;
            }
        };
        return Rectangle;
    }());
    math.Rectangle = Rectangle;
})(math || (math = {}));
window.onload = function () {
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
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    var currentTarget;
    var startTarget;
    var isMouseDown = false;
    var startPoint = new math.Point(-1, -1);
    var movingPoint = new math.Point(0, 0);
    var stage = new DisplayObjectContainer();
    stage.alpha = 0.8;
    stage.x = 50;
    stage.width = 400;
    stage.height = 400;
    var container = new DisplayObjectContainer();
    container.width = 400;
    container.height = 400;
    var list = new imageBitmap("src/flower.jpg");
    var button = new imageBitmap("src/finish.png");
    container.addChild(list);
    container.addChild(button);
    button.x = 20;
    button.y = 25;
    stage.addChild(container);
    stage.addEventListener(TouchEventsType.MOUSEDOWN, function () {
        //alert("stage");
    }, _this);
    container.addEventListener(TouchEventsType.MOUSEMOVE, function () {
    }, _this);
    list.addEventListener(TouchEventsType.MOUSEMOVE, function () {
        if (currentTarget == startTarget) {
            container.x += (TouchEventService.stageX - movingPoint.x);
            container.y += (TouchEventService.stageY - movingPoint.y);
        }
    }, _this);
    button.addEventListener(TouchEventsType.CLICK, function () {
        alert("Have already click!");
    }, _this);
    window.onmousedown = function (e) {
        var x = e.offsetX - 3;
        var y = e.offsetY - 3;
        TouchEventService.stageX = x;
        TouchEventService.stageY = y;
        startPoint.x = x;
        startPoint.y = y;
        movingPoint.x = x;
        movingPoint.y = y;
        TouchEventService.currentType = TouchEventsType.MOUSEDOWN;
        currentTarget = stage.hitTest(x, y);
        startTarget = currentTarget;
        TouchEventService.getInstance().execute();
        isMouseDown = true;
    };
    window.onmouseup = function (e) {
        var x = e.offsetX - 3;
        var y = e.offsetY - 3;
        TouchEventService.stageX = x;
        TouchEventService.stageY = y;
        var target = stage.hitTest(x, y);
        if (target == currentTarget) {
            TouchEventService.currentType = TouchEventsType.CLICK;
        }
        else {
            TouchEventService.currentType = TouchEventsType.MOUSEUP;
        }
        TouchEventService.getInstance().execute();
        currentTarget = null;
        isMouseDown = false;
    };
    window.onmousemove = function (e) {
        if (isMouseDown) {
            var x = e.offsetX - 3;
            var y = e.offsetY - 3;
            TouchEventService.stageX = x;
            TouchEventService.stageY = y;
            TouchEventService.currentType = TouchEventsType.MOUSEMOVE;
            currentTarget = stage.hitTest(x, y);
            TouchEventService.getInstance().execute();
            movingPoint.x = x;
            movingPoint.y = y;
        }
    };
    setInterval(function () {
        context.save();
        context.clearRect(0, 0, canvas.width, canvas.height);
        stage.draw(context);
        context.restore();
    }, 100);
    /*
        var image = document.createElement("img");
        var Bitmap = new imageBitmap("flower.jpg");
        image.src="src/flower.jpg"
        Bitmap.image = image;
        Bitmap.x = 10;
        Bitmap.y = 10;
    
        var textField1 = new TextField();
        textField1.x = 20;
        textField1.y = 20;
        textField1.text = "Hello World";
        textField1.color = "#FF0000";
        textField1.alpha = 0.5;
        
        var textField2 = new TextField();
        textField2.x = 50;
        textField2.y = 20;
        textField2.text = "Hello World";
        textField2.color = "#FF0000";
    
        image.onload = () => {
            stage.addChild(Bitmap);
            stage.addChild(textField1);
            stage.addChild(textField2);
        }*/
};
var DisplayObject = (function () {
    function DisplayObject() {
        this.x = 0;
        this.y = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.rotation = 0; //     =1?
        this.matrix = null;
        this.globalMatrix = null;
        this.alpha = 1;
        this.globalAlpha = 1;
        this.listeners = [];
        this.width = 1;
        this.height = 1;
        this.matrix = new math.Matrix();
        this.globalMatrix = new math.Matrix();
    }
    DisplayObject.prototype.draw = function (context2D) {
        this.matrix.updateFromDisplayObject(this.x, this.y, this.scaleX, this.scaleY, this.rotation);
        if (this.parent) {
            this.globalAlpha = this.parent.globalAlpha * this.alpha;
            this.globalMatrix = math.matrixAppendMatrix(this.matrix, this.parent.globalMatrix); //?
        }
        else {
            this.globalAlpha = this.alpha;
            this.globalMatrix = this.matrix;
        }
        context2D.globalAlpha = this.globalAlpha;
        context2D.setTransform(this.globalMatrix.a, this.globalMatrix.b, this.globalMatrix.c, this.globalMatrix.d, this.globalMatrix.tx, this.globalMatrix.ty);
        this.render(context2D);
    };
    DisplayObject.prototype.addEventListener = function (type, touchFunction, object, ifCapture, priority) {
        var touchEvent = new TouchEvents(type, touchFunction, object, ifCapture, priority);
        this.listeners.push(touchEvent);
    };
    return DisplayObject;
}());
var imageBitmap = (function (_super) {
    __extends(imageBitmap, _super);
    function imageBitmap(id) {
        var _this = this;
        _super.call(this);
        this.x = 0;
        this.y = 0;
        this.imageInfo = "";
        this.imageInfo = id;
        this.image = new Image();
        this.image.src = this.imageInfo;
        this.image.onload = function () {
            _this.width = _this.image.width;
            _this.height = _this.image.height;
        };
    }
    imageBitmap.prototype.render = function (context2D) {
        context2D.drawImage(this.image, this.x, this.y);
    };
    imageBitmap.prototype.hitTest = function (x, y) {
        var rect = new math.Rectangle();
        rect.x = rect.y = 0;
        rect.width = this.image.width;
        rect.height = this.image.height;
        if (rect.isPointInRectangle(x, y)) {
            TouchEventService.getInstance().addList(this);
            return this;
        }
        else {
            return null;
        }
    };
    return imageBitmap;
}(DisplayObject));
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        _super.apply(this, arguments);
        this.x = 0;
        this.y = 0;
        this.size = 18;
        this.color = "";
        this.text = "";
    }
    TextField.prototype.render = function (context2D) {
        context2D.fillStyle = this.color;
        context2D.fillText(this.text, this.x, this.y + this.size);
    };
    TextField.prototype.hitTest = function (x, y) {
        var rect = new math.Rectangle();
        rect.x = rect.y = 0;
        rect.width = this.size * this.text.length;
        rect.height = this.size;
        if (rect.isPointInRectangle(x, y)) {
            TouchEventService.getInstance().addList(this);
            return this;
        }
        else {
            return null;
        }
    };
    return TextField;
}(DisplayObject));
var DisplayObjectContainer = (function (_super) {
    __extends(DisplayObjectContainer, _super);
    function DisplayObjectContainer() {
        _super.apply(this, arguments);
        this.array = [];
    }
    DisplayObjectContainer.prototype.addChild = function (displayObject) {
        if (this.array.indexOf(displayObject) == -1) {
            this.array.push(displayObject);
            displayObject.parent = this;
        }
    };
    DisplayObjectContainer.prototype.removeChild = function (displayObject) {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element == displayObject) {
                var index = this.array.indexOf(displayObject);
                this.array.splice(index);
                return;
            }
        }
    };
    DisplayObjectContainer.prototype.render = function (context2D) {
        for (var _i = 0, _a = this.array; _i < _a.length; _i++) {
            var displayObject = _a[_i];
            displayObject.draw(context2D);
        }
    };
    DisplayObjectContainer.prototype.hitTest = function (x, y) {
        var rect = new math.Rectangle();
        rect.x = rect.y = 0;
        rect.width = this.width;
        rect.height = this.height;
        var result = null;
        if (rect.isPointInRectangle(x, y)) {
            result = this;
            TouchEventService.getInstance().addList(this);
            for (var i = this.array.length - 1; i >= 0; i--) {
                var child = this.array[i];
                var point = new math.Point(x, y);
                var invertChildenLocalMatirx = math.invertMatrix(child.matrix);
                var pointBasedOnChild = math.pointAppendMatrix(point, invertChildenLocalMatirx);
                var hitTestResult = child.hitTest(pointBasedOnChild.x, pointBasedOnChild.y);
                if (hitTestResult) {
                    result = hitTestResult;
                    break;
                }
            }
            return result;
        }
        return null;
    };
    return DisplayObjectContainer;
}(DisplayObject));
//# sourceMappingURL=main.js.map