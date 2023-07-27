"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event {
    constructor(name, args, nextTaskName) {
        this.name = name;
        this.arguments = args;
        this.nextTaskName = nextTaskName;
        this.fromTaskName = "";
    }
    gsl() {
        return `Transition ${this.fromTaskName} handling ${this.name} -> ${this.nextTaskName};\n`;
    }
}
exports.default = Event;
//# sourceMappingURL=Event.js.map