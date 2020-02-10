/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.16.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1ObjectMeta } from './v1ObjectMeta';
import { V1beta1AggregationRule } from './v1beta1AggregationRule';
import { V1beta1PolicyRule } from './v1beta1PolicyRule';

/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 */
export class V1beta1ClusterRole {
    'aggregationRule'?: V1beta1AggregationRule;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    'apiVersion'?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    'kind'?: string;
    'metadata'?: V1ObjectMeta;
    /**
     * Rules holds all the PolicyRules for this ClusterRole
     */
    'rules'?: Array<V1beta1PolicyRule>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'aggregationRule',
            baseName: 'aggregationRule',
            type: 'V1beta1AggregationRule',
        },
        {
            name: 'apiVersion',
            baseName: 'apiVersion',
            type: 'string',
        },
        {
            name: 'kind',
            baseName: 'kind',
            type: 'string',
        },
        {
            name: 'metadata',
            baseName: 'metadata',
            type: 'V1ObjectMeta',
        },
        {
            name: 'rules',
            baseName: 'rules',
            type: 'Array<V1beta1PolicyRule>',
        },
    ];

    static getAttributeTypeMap() {
        return V1beta1ClusterRole.attributeTypeMap;
    }
}
