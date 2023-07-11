"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Version {
    constructor(major, minor, micro, options = null) {
        this.major = major;
        this.minor = minor;
        this.micro = micro;
    }
    properties() {
        let properties = {};
        if (this.major != null) {
            properties["major"] = this.major;
        }
        if (this.minor != null) {
            properties["minor"] = this.minor;
        }
        if (this.micro != null) {
            properties["micro"] = this.micro;
        }
        return properties;
    }
}
exports.default = Version;
//# sourceMappingURL=Version.js.map