"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentMasterData = exports.RepeatSchedule = exports.EventRepeatEndDayOfWeek = exports.EventRepeatBeginDayOfWeek = exports.EventRepeatType = exports.EventScheduleType = exports.Event = exports.Namespace = void 0;
const tslib_1 = require("tslib");
/*
 * Copyright 2016- Game Server Services, Inc. or its affiliates. All Rights
 * Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
const Namespace_1 = tslib_1.__importDefault(require("./Namespace"));
exports.Namespace = Namespace_1.default;
const Event_1 = tslib_1.__importDefault(require("./Event"));
exports.Event = Event_1.default;
const EventScheduleType_1 = require("./enum/EventScheduleType");
Object.defineProperty(exports, "EventScheduleType", { enumerable: true, get: function () { return EventScheduleType_1.EventScheduleType; } });
const EventRepeatType_1 = require("./enum/EventRepeatType");
Object.defineProperty(exports, "EventRepeatType", { enumerable: true, get: function () { return EventRepeatType_1.EventRepeatType; } });
const EventRepeatBeginDayOfWeek_1 = require("./enum/EventRepeatBeginDayOfWeek");
Object.defineProperty(exports, "EventRepeatBeginDayOfWeek", { enumerable: true, get: function () { return EventRepeatBeginDayOfWeek_1.EventRepeatBeginDayOfWeek; } });
const EventRepeatEndDayOfWeek_1 = require("./enum/EventRepeatEndDayOfWeek");
Object.defineProperty(exports, "EventRepeatEndDayOfWeek", { enumerable: true, get: function () { return EventRepeatEndDayOfWeek_1.EventRepeatEndDayOfWeek; } });
const RepeatSchedule_1 = tslib_1.__importDefault(require("./RepeatSchedule"));
exports.RepeatSchedule = RepeatSchedule_1.default;
const CurrentMasterData_1 = tslib_1.__importDefault(require("./CurrentMasterData"));
exports.CurrentMasterData = CurrentMasterData_1.default;
//# sourceMappingURL=index.js.map