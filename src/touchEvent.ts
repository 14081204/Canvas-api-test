enum TouchEventsType{
    MOUSEDOWN = 0,
    MOUSEUP = 1,
    CLICK = 2,
    MOUSEMOVE = 3
}

class TouchEventService{
    private static instance;
    private localList : DisplayObject[] = [];
    static currentType : TouchEventsType;
    static stageX = -1;
    static stageY = -1;
    static getInstance() : TouchEventService{
        if(TouchEventService.instance == null){
            TouchEventService.instance = new TouchEventService();
        }
        return this.instance;
    }
    addList(performer : DisplayObject){
        this.localList.push(performer);
    }
    clearList(){
        this.localList.splice(0,this.localList.length);
    }
    execute(){
        for(var i = 0;i <= this.localList.length - 1;i++){      
            for(var listner of this.localList[i].listeners){
                if(listner.type == TouchEventService.currentType){
                    if(listner.capture){
                        listner.func();
                        continue;
                    }
                }
            }
        }
        for(var i = this.localList.length - 1;i >= 0;i--){      
            for(var listner of this.localList[i].listeners){
                if(listner.type == TouchEventService.currentType){
                    if(!listner.capture){
                        listner.func();
                        continue;
                    }
                }
            }
        }
        this.clearList();
    }
}

class TouchEvents {
    type: TouchEventsType;
    func: Function;
    object: any;
    capture = false;
    priority = 0;


    constructor(type: TouchEventsType, func: Function, obj: any, capture?: boolean, priority?: number) {
        this.type = type;
        this.func = func;
        this.object = obj;
        this.capture = capture || false;
        this.priority = priority || 0;
    }
}