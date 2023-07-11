"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuestGroupModel {
    constructor(name, options = null) {
        var _a, _b, _c;
        this.metadata = null;
        this.quests = null;
        this.challengePeriodEventId = null;
        this.name = name;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.quests = (_b = options === null || options === void 0 ? void 0 : options.quests) !== null && _b !== void 0 ? _b : null;
        this.challengePeriodEventId = (_c = options === null || options === void 0 ? void 0 : options.challengePeriodEventId) !== null && _c !== void 0 ? _c : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.quests != null) {
            properties["quests"] = this.quests.map(v => v.properties());
        }
        if (this.challengePeriodEventId != null) {
            properties["challengePeriodEventId"] = this.challengePeriodEventId;
        }
        return properties;
    }
}
exports.default = QuestGroupModel;
//# sourceMappingURL=QuestGroupModel.js.map