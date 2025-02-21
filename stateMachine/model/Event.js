"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventEventType_1 = require("./enums/EventEventType");
class Event {
    constructor(eventType, options = null) {
        var _a, _b;
        this.changeStateEvent = null;
        this.emitEvent = null;
        this.eventType = eventType;
        this.changeStateEvent = (_a = options === null || options === void 0 ? void 0 : options.changeStateEvent) !== null && _a !== void 0 ? _a : null;
        this.emitEvent = (_b = options === null || options === void 0 ? void 0 : options.emitEvent) !== null && _b !== void 0 ? _b : null;
    }
    static eventTypeIsChangeState(changeStateEvent, options = null) {
        return new Event(EventEventType_1.EventEventType.CHANGE_STATE, {
            changeStateEvent: changeStateEvent,
        });
    }
    static eventTypeIsEmit(emitEvent, options = null) {
        return new Event(EventEventType_1.EventEventType.EMIT, {
            emitEvent: emitEvent,
        });
    }
    properties() {
        var _a, _b;
        let properties = {};
        if (this.eventType != null) {
            properties["eventType"] = this.eventType;
        }
        if (this.changeStateEvent != null) {
            properties["changeStateEvent"] = (_a = this.changeStateEvent) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.emitEvent != null) {
            properties["emitEvent"] = (_b = this.emitEvent) === null || _b === void 0 ? void 0 : _b.properties();
        }
        return properties;
    }
}
exports.default = Event;
//# sourceMappingURL=Event.js.map