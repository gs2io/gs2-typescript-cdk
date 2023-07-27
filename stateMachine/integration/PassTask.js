"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PassTask {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    transition(event) {
        return this;
    }
    getEvents() {
        return [];
    }
    gsl() {
        return "PassTask Pass;\n\n";
    }
    mermaid() {
        return `${this.name}_${this.name}[${this.name}/]\n`;
    }
}
exports.default = PassTask;
//# sourceMappingURL=PassTask.js.map