"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SeasonModel {
    constructor(name, maximumParticipants, challengePeriodEventId, options = null) {
        var _a, _b;
        this.metadata = null;
        this.experienceModelId = null;
        this.name = name;
        this.maximumParticipants = maximumParticipants;
        this.challengePeriodEventId = challengePeriodEventId;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.experienceModelId = (_b = options === null || options === void 0 ? void 0 : options.experienceModelId) !== null && _b !== void 0 ? _b : null;
    }
    properties() {
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.maximumParticipants != null) {
            properties["maximumParticipants"] = this.maximumParticipants;
        }
        if (this.experienceModelId != null) {
            properties["experienceModelId"] = this.experienceModelId;
        }
        if (this.challengePeriodEventId != null) {
            properties["challengePeriodEventId"] = this.challengePeriodEventId;
        }
        return properties;
    }
}
exports.default = SeasonModel;
//# sourceMappingURL=SeasonModel.js.map