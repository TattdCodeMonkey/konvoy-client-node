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

import { IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterAddonsList } from './ioMesosphereKommanderV1beta1KonvoyClusterSpecClusterAddonsList';
import { IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterHelmRepository } from './ioMesosphereKommanderV1beta1KonvoyClusterSpecClusterHelmRepository';

export class IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterAddons {
    /**
     * AddonConfigs is the list of AddonConfig entries
     */
    'addonsList'?: Array<IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterAddonsList>;
    'configRepository': string;
    'configVersion'?: string;
    'helmRepository'?: IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterHelmRepository;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'addonsList',
            baseName: 'addonsList',
            type: 'Array<IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterAddonsList>',
        },
        {
            name: 'configRepository',
            baseName: 'configRepository',
            type: 'string',
        },
        {
            name: 'configVersion',
            baseName: 'configVersion',
            type: 'string',
        },
        {
            name: 'helmRepository',
            baseName: 'helmRepository',
            type: 'IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterHelmRepository',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecClusterAddons.attributeTypeMap;
    }
}
