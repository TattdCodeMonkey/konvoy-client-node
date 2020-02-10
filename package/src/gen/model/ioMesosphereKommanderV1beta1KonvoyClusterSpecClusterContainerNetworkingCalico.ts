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
 * CalicoContainerNetworking describes Calico CNI
 */
export class IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterContainerNetworkingCalico {
    'encapsulation'?: string;
    'mtu'?: number;
    'version'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'encapsulation',
            baseName: 'encapsulation',
            type: 'string',
        },
        {
            name: 'mtu',
            baseName: 'mtu',
            type: 'number',
        },
        {
            name: 'version',
            baseName: 'version',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterContainerNetworkingCalico.attributeTypeMap;
    }
}
