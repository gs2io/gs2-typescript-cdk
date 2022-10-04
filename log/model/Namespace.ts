/*
 * Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
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

import core from "../../core";
import {GetAttr} from "../../core/func";
import {Stack} from "../../core/model";

export const NamespaceType = {
    GS2: "gs2",
    BIGQUERY: "bigquery",
    FIREHOSE: "firehose",
} as const;
export type NamespaceType = typeof NamespaceType[keyof typeof NamespaceType];

import NamespaceRef from "../ref/NamespaceRef";

export interface NamespaceOptions {
    description?: string|null|undefined;
    gcpCredentialJson?: string|null|undefined;
    bigQueryDatasetName?: string|null|undefined;
    logExpireDays?: number|null|undefined;
    awsRegion?: string|null|undefined;
    awsAccessKeyId?: string|null|undefined;
    awsSecretAccessKey?: string|null|undefined;
    firehoseStreamName?: string|null|undefined;
}

export interface NamespaceGs2Options {
}

export interface NamespaceBigqueryOptions {
}

export interface NamespaceFirehoseOptions {
}

export default class Namespace extends core.CdkResource {

    private stack: Stack;
	private readonly name: string;
	private readonly description: string|null = null;
	private readonly type: NamespaceType;
	private readonly gcpCredentialJson: string|null = null;
	private readonly bigQueryDatasetName: string|null = null;
	private readonly logExpireDays: number|null = null;
	private readonly awsRegion: string|null = null;
	private readonly awsAccessKeyId: string|null = null;
	private readonly awsSecretAccessKey: string|null = null;
	private readonly firehoseStreamName: string|null = null;

    public constructor(
            stack: Stack,
            name: string,
            type: NamespaceType,
            options?: NamespaceOptions,
    ) {
        super("Log_Namespace_" + name);

        this.stack = stack;
        this.name = name;
        this.description = options?.description ?? null;
        this.type = type;
        this.gcpCredentialJson = options?.gcpCredentialJson ?? null;
        this.bigQueryDatasetName = options?.bigQueryDatasetName ?? null;
        this.logExpireDays = options?.logExpireDays ?? null;
        this.awsRegion = options?.awsRegion ?? null;
        this.awsAccessKeyId = options?.awsAccessKeyId ?? null;
        this.awsSecretAccessKey = options?.awsSecretAccessKey ?? null;
        this.firehoseStreamName = options?.firehoseStreamName ?? null;

        stack.addResource(this);
    }

    public resourceType(): string {
        return "GS2::Log::Namespace";
    }

    public properties(): {[name: string]: any} {
        let properties: {[name: string]: any} = {};
        if (this.name != null) {
            properties["Name"] = this.name;
        }
        if (this.description != null) {
            properties["Description"] = this.description;
        }
        if (this.type != null) {
            properties["Type"] = this.type;
        }
        if (this.gcpCredentialJson != null) {
            properties["GcpCredentialJson"] = this.gcpCredentialJson;
        }
        if (this.bigQueryDatasetName != null) {
            properties["BigQueryDatasetName"] = this.bigQueryDatasetName;
        }
        if (this.logExpireDays != null) {
            properties["LogExpireDays"] = this.logExpireDays;
        }
        if (this.awsRegion != null) {
            properties["AwsRegion"] = this.awsRegion;
        }
        if (this.awsAccessKeyId != null) {
            properties["AwsAccessKeyId"] = this.awsAccessKeyId;
        }
        if (this.awsSecretAccessKey != null) {
            properties["AwsSecretAccessKey"] = this.awsSecretAccessKey;
        }
        if (this.firehoseStreamName != null) {
            properties["FirehoseStreamName"] = this.firehoseStreamName;
        }
        return properties;
    }

    public ref(
    ): NamespaceRef {
        return new NamespaceRef(
            this.name,
        );
    }

    public getAttrNamespaceId(): GetAttr {
        return new GetAttr(
            null,
            null,
            "Item.NamespaceId"
        );
    }
}
