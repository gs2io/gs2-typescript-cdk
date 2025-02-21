"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BuffEntryModelTargetType_1 = require("./enums/BuffEntryModelTargetType");
class BuffEntryModel {
    constructor(name, expression, targetType, priority, options = null) {
        var _a, _b, _c, _d;
        this.metadata = null;
        this.targetModel = null;
        this.targetAction = null;
        this.applyPeriodScheduleEventId = null;
        this.name = name;
        this.expression = expression;
        this.targetType = targetType;
        this.priority = priority;
        this.metadata = (_a = options === null || options === void 0 ? void 0 : options.metadata) !== null && _a !== void 0 ? _a : null;
        this.targetModel = (_b = options === null || options === void 0 ? void 0 : options.targetModel) !== null && _b !== void 0 ? _b : null;
        this.targetAction = (_c = options === null || options === void 0 ? void 0 : options.targetAction) !== null && _c !== void 0 ? _c : null;
        this.applyPeriodScheduleEventId = (_d = options === null || options === void 0 ? void 0 : options.applyPeriodScheduleEventId) !== null && _d !== void 0 ? _d : null;
    }
    static targetTypeIsModel(name, expression, priority, targetModel, options = null) {
        return new BuffEntryModel(name, expression, BuffEntryModelTargetType_1.BuffEntryModelTargetType.MODEL, priority, {
            targetModel: targetModel,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            applyPeriodScheduleEventId: options === null || options === void 0 ? void 0 : options.applyPeriodScheduleEventId,
        });
    }
    static targetTypeIsAction(name, expression, priority, targetAction, options = null) {
        return new BuffEntryModel(name, expression, BuffEntryModelTargetType_1.BuffEntryModelTargetType.ACTION, priority, {
            targetAction: targetAction,
            metadata: options === null || options === void 0 ? void 0 : options.metadata,
            applyPeriodScheduleEventId: options === null || options === void 0 ? void 0 : options.applyPeriodScheduleEventId,
        });
    }
    properties() {
        var _a, _b;
        let properties = {};
        if (this.name != null) {
            properties["name"] = this.name;
        }
        if (this.metadata != null) {
            properties["metadata"] = this.metadata;
        }
        if (this.expression != null) {
            properties["expression"] = this.expression;
        }
        if (this.targetType != null) {
            properties["targetType"] = this.targetType;
        }
        if (this.targetModel != null) {
            properties["targetModel"] = (_a = this.targetModel) === null || _a === void 0 ? void 0 : _a.properties();
        }
        if (this.targetAction != null) {
            properties["targetAction"] = (_b = this.targetAction) === null || _b === void 0 ? void 0 : _b.properties();
        }
        if (this.priority != null) {
            properties["priority"] = this.priority;
        }
        if (this.applyPeriodScheduleEventId != null) {
            properties["applyPeriodScheduleEventId"] = this.applyPeriodScheduleEventId;
        }
        return properties;
    }
}
exports.default = BuffEntryModel;
//# sourceMappingURL=BuffEntryModel.js.map