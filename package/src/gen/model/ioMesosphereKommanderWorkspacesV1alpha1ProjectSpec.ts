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

import { IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacement } from './ioMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacement';

/**
 * ProjectSpec describes the attributes on a Project
 */
export class IoMesosphereKommanderWorkspacesV1alpha1ProjectSpec {
    'placement'?: IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacement;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'placement',
            baseName: 'placement',
            type: 'IoMesosphereKommanderV1beta1VirtualGroupRoleBindingSpecPlacement',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderWorkspacesV1alpha1ProjectSpec.attributeTypeMap;
    }
}
