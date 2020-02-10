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

import { IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef } from './ioMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef';

/**
 * ClusterReference holds a single reference to clusters provisioned via Kommander. Only one field is allowed to be set. Currently, only Konvoy clusters are creatable, but this is left extensible for other provider types in the future.
 */
export class IoMesosphereKommanderV1beta1KommanderClusterSpecClusterRef {
    'konvoyCluster'?: IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'konvoyCluster',
            baseName: 'konvoyCluster',
            type: 'IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecVirtualGroupRef',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KommanderClusterSpecClusterRef.attributeTypeMap;
    }
}
