"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InGameLogTag = exports.MetricModelType = exports.MetricModel = exports.Trace = exports.TimeseriesValue = exports.TimeseriesPoint = exports.TimeseriesMetadata = exports.NumericRange = exports.LogEntryStatus = exports.LogEntry = exports.Label = exports.FacetValueCount = exports.Facet = exports.AggregationConfigType = exports.AggregationConfig = exports.Dashboard = exports.FacetModelType = exports.FacetModel = exports.AccessLogWithTelemetryStatus = exports.AccessLogWithTelemetry = exports.ExecuteStampTaskLogCount = exports.ExecuteStampTaskLog = exports.ExecuteStampSheetLogCount = exports.ExecuteStampSheetLog = exports.IssueStampSheetLogCount = exports.IssueStampSheetLog = exports.AccessLogCount = exports.AccessLog = exports.NamespaceFirehoseCompressData = exports.NamespaceType = exports.Namespace = void 0;
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
const NamespaceType_1 = require("./enums/NamespaceType");
Object.defineProperty(exports, "NamespaceType", { enumerable: true, get: function () { return NamespaceType_1.NamespaceType; } });
const NamespaceFirehoseCompressData_1 = require("./enums/NamespaceFirehoseCompressData");
Object.defineProperty(exports, "NamespaceFirehoseCompressData", { enumerable: true, get: function () { return NamespaceFirehoseCompressData_1.NamespaceFirehoseCompressData; } });
const AccessLog_1 = tslib_1.__importDefault(require("./AccessLog"));
exports.AccessLog = AccessLog_1.default;
const AccessLogCount_1 = tslib_1.__importDefault(require("./AccessLogCount"));
exports.AccessLogCount = AccessLogCount_1.default;
const IssueStampSheetLog_1 = tslib_1.__importDefault(require("./IssueStampSheetLog"));
exports.IssueStampSheetLog = IssueStampSheetLog_1.default;
const IssueStampSheetLogCount_1 = tslib_1.__importDefault(require("./IssueStampSheetLogCount"));
exports.IssueStampSheetLogCount = IssueStampSheetLogCount_1.default;
const ExecuteStampSheetLog_1 = tslib_1.__importDefault(require("./ExecuteStampSheetLog"));
exports.ExecuteStampSheetLog = ExecuteStampSheetLog_1.default;
const ExecuteStampSheetLogCount_1 = tslib_1.__importDefault(require("./ExecuteStampSheetLogCount"));
exports.ExecuteStampSheetLogCount = ExecuteStampSheetLogCount_1.default;
const ExecuteStampTaskLog_1 = tslib_1.__importDefault(require("./ExecuteStampTaskLog"));
exports.ExecuteStampTaskLog = ExecuteStampTaskLog_1.default;
const ExecuteStampTaskLogCount_1 = tslib_1.__importDefault(require("./ExecuteStampTaskLogCount"));
exports.ExecuteStampTaskLogCount = ExecuteStampTaskLogCount_1.default;
const AccessLogWithTelemetry_1 = tslib_1.__importDefault(require("./AccessLogWithTelemetry"));
exports.AccessLogWithTelemetry = AccessLogWithTelemetry_1.default;
const AccessLogWithTelemetryStatus_1 = require("./enums/AccessLogWithTelemetryStatus");
Object.defineProperty(exports, "AccessLogWithTelemetryStatus", { enumerable: true, get: function () { return AccessLogWithTelemetryStatus_1.AccessLogWithTelemetryStatus; } });
const FacetModel_1 = tslib_1.__importDefault(require("./FacetModel"));
exports.FacetModel = FacetModel_1.default;
const FacetModelType_1 = require("./enums/FacetModelType");
Object.defineProperty(exports, "FacetModelType", { enumerable: true, get: function () { return FacetModelType_1.FacetModelType; } });
const Dashboard_1 = tslib_1.__importDefault(require("./Dashboard"));
exports.Dashboard = Dashboard_1.default;
const AggregationConfig_1 = tslib_1.__importDefault(require("./AggregationConfig"));
exports.AggregationConfig = AggregationConfig_1.default;
const AggregationConfigType_1 = require("./enums/AggregationConfigType");
Object.defineProperty(exports, "AggregationConfigType", { enumerable: true, get: function () { return AggregationConfigType_1.AggregationConfigType; } });
const Facet_1 = tslib_1.__importDefault(require("./Facet"));
exports.Facet = Facet_1.default;
const FacetValueCount_1 = tslib_1.__importDefault(require("./FacetValueCount"));
exports.FacetValueCount = FacetValueCount_1.default;
const Label_1 = tslib_1.__importDefault(require("./Label"));
exports.Label = Label_1.default;
const LogEntry_1 = tslib_1.__importDefault(require("./LogEntry"));
exports.LogEntry = LogEntry_1.default;
const LogEntryStatus_1 = require("./enums/LogEntryStatus");
Object.defineProperty(exports, "LogEntryStatus", { enumerable: true, get: function () { return LogEntryStatus_1.LogEntryStatus; } });
const NumericRange_1 = tslib_1.__importDefault(require("./NumericRange"));
exports.NumericRange = NumericRange_1.default;
const TimeseriesMetadata_1 = tslib_1.__importDefault(require("./TimeseriesMetadata"));
exports.TimeseriesMetadata = TimeseriesMetadata_1.default;
const TimeseriesPoint_1 = tslib_1.__importDefault(require("./TimeseriesPoint"));
exports.TimeseriesPoint = TimeseriesPoint_1.default;
const TimeseriesValue_1 = tslib_1.__importDefault(require("./TimeseriesValue"));
exports.TimeseriesValue = TimeseriesValue_1.default;
const Trace_1 = tslib_1.__importDefault(require("./Trace"));
exports.Trace = Trace_1.default;
const MetricModel_1 = tslib_1.__importDefault(require("./MetricModel"));
exports.MetricModel = MetricModel_1.default;
const MetricModelType_1 = require("./enums/MetricModelType");
Object.defineProperty(exports, "MetricModelType", { enumerable: true, get: function () { return MetricModelType_1.MetricModelType; } });
const InGameLogTag_1 = tslib_1.__importDefault(require("./InGameLogTag"));
exports.InGameLogTag = InGameLogTag_1.default;
//# sourceMappingURL=index.js.map