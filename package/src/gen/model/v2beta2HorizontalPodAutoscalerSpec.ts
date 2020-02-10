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

import { V2beta2CrossVersionObjectReference } from './v2beta2CrossVersionObjectReference';
import { V2beta2MetricSpec } from './v2beta2MetricSpec';

/**
 * HorizontalPodAutoscalerSpec describes the desired functionality of the HorizontalPodAutoscaler.
 */
export class V2beta2HorizontalPodAutoscalerSpec {
    /**
     * maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas.
     */
    'maxReplicas': number;
    /**
     * metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization.
     */
    'metrics'?: Array<V2beta2MetricSpec>;
    /**
     * minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available.
     */
    'minReplicas'?: number;
    'scaleTargetRef': V2beta2CrossVersionObjectReference;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'maxReplicas',
            baseName: 'maxReplicas',
            type: 'number',
        },
        {
            name: 'metrics',
            baseName: 'metrics',
            type: 'Array<V2beta2MetricSpec>',
        },
        {
            name: 'minReplicas',
            baseName: 'minReplicas',
            type: 'number',
        },
        {
            name: 'scaleTargetRef',
            baseName: 'scaleTargetRef',
            type: 'V2beta2CrossVersionObjectReference',
        },
    ];

    static getAttributeTypeMap() {
        return V2beta2HorizontalPodAutoscalerSpec.attributeTypeMap;
    }
}
