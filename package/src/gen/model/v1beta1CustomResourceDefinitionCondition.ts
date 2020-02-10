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

/**
 * CustomResourceDefinitionCondition contains details for the current condition of this pod.
 */
export class V1beta1CustomResourceDefinitionCondition {
    /**
     * lastTransitionTime last time the condition transitioned from one status to another.
     */
    'lastTransitionTime'?: Date;
    /**
     * message is a human-readable message indicating details about last transition.
     */
    'message'?: string;
    /**
     * reason is a unique, one-word, CamelCase reason for the condition\'s last transition.
     */
    'reason'?: string;
    /**
     * status is the status of the condition. Can be True, False, Unknown.
     */
    'status': string;
    /**
     * type is the type of the condition. Types include Established, NamesAccepted and Terminating.
     */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'lastTransitionTime',
            baseName: 'lastTransitionTime',
            type: 'Date',
        },
        {
            name: 'message',
            baseName: 'message',
            type: 'string',
        },
        {
            name: 'reason',
            baseName: 'reason',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return V1beta1CustomResourceDefinitionCondition.attributeTypeMap;
    }
}
