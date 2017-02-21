/*interface Drawable{
    draw(context2D : CanvasRenderingContext2D);
}

class imageBitmap extends DisplayObject{
    Image : HTMLImageElement;
    x = 0;
    y = 0;
    imageInfo = "";
    draw(context2D : CanvasRenderingContext2D){
        context2D.drawImage(this.Image,this.x, this.y);
    }
}

class TextField extends DisplayObject{
    x = 0;
    y = 0;
    color = "";
    text = "";
    draw(context2D : CanvasRenderingContext2D){
        context2D.fillStyle = this.color;
        context2D.fillText(this.text, this.x, this.y);
    }
}

class DisplayObjectContainer implements Drawable{
    array : Drawable[] = [];
    draw(context2D : CanvasRenderingContext2D){
        for(let Drawable of this.array){
            Drawable.draw(context2D);
        }
    }
    addChild(displayObject:DisplayObject){
        this.array.push(displayObject);
    }
}

class DisplayObject implements Drawable{
    x = 0;
    y = 0;
    draw(context2D : CanvasRenderingContext2D){
    }
}

*/