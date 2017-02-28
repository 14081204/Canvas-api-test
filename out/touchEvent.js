var TouchEventsType;
(function (TouchEventsType) {
    TouchEventsType[TouchEventsType["MOUSEDOWN"] = 0] = "MOUSEDOWN";
    TouchEventsType[TouchEventsType["MOUSEUP"] = 1] = "MOUSEUP";
    TouchEventsType[TouchEventsType["CLICK"] = 2] = "CLICK";
    TouchEventsType[TouchEventsType["MOUSEMOVE"] = 3] = "MOUSEMOVE";
})(TouchEventsType || (TouchEventsType = {}));
var TouchEventService = (function () {
    function TouchEventService() {
        this.localList = [];
    }
    TouchEventService.getInstance = function () {
        if (TouchEventService.instance == null) {
            TouchEventService.instance = new TouchEventService();
        }
        return this.instance;
    };
    TouchEventService.prototype.addList = function (performer) {
        this.localList.push(performer);
    };
    TouchEventService.prototype.clearList = function () {
        this.localList.splice(0, this.localList.length);
    };
    TouchEventService.prototype.execute = function () {
        for (var i = 0; i <= this.localList.length - 1; i++) {
            for (var _i = 0, _a = this.localList[i].listeners; _i < _a.length; _i++) {
                var listner = _a[_i];
                if (listner.type == TouchEventService.currentType) {
                    if (listner.capture) {
                        listner.func();
                        continue;
                    }
                }
            }
        }
        for (var i = this.localList.length - 1; i >= 0; i--) {
            for (var _b = 0, _c = this.localList[i].listeners; _b < _c.length; _b++) {
                var listner = _c[_b];
                if (listner.type == TouchEventService.currentType) {
                    if (!listner.capture) {
                        listner.func();
                        continue;
                    }
                }
            }
        }
        this.clearList();
    };
    TouchEventService.stageX = -1;
    TouchEventService.stageY = -1;
    return TouchEventService;
}());
var TouchEvents = (function () {
    function TouchEvents(type, func, obj, capture, priority) {
        this.capture = false;
        this.priority = 0;
        this.type = type;
        this.func = func;
        this.object = obj;
        this.capture = capture || false;
        this.priority = priority || 0;
    }
    return TouchEvents;
}());
//# sourceMappingURL=touchEvent.js.map