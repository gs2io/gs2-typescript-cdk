"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Microservice {
    constructor(name, version, options = null) {
        this.name = name;
        this.version = version;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.version != null) {
            properties["version"] = this.version;
        }
        return properties;
    }
}
exports.default = Microservice;
//# sourceMappingURL=Microservice.js.map