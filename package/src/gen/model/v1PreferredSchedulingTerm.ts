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

import { V1NodeSelectorTerm } from './v1NodeSelectorTerm';

/**
 * An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it\'s a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).
 */
export class V1PreferredSchedulingTerm {
    'preference': V1NodeSelectorTerm;
    /**
     * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
     */
    'weight': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'preference',
            baseName: 'preference',
            type: 'V1NodeSelectorTerm',
        },
        {
            name: 'weight',
            baseName: 'weight',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return V1PreferredSchedulingTerm.attributeTypeMap;
    }
}
