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

import { IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerAwsElb } from './ioMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerAwsElb';
import { IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerAwsVpc } from './ioMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerAwsVpc';

/**
 * AWSProviderOptions describes AWS provider related options
 */
export class IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerAws {
    'availabilityZones'?: Array<string>;
    'elb'?: IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerAwsElb;
    'region'?: string;
    'tags'?: { [key: string]: string };
    'vpc'?: IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerAwsVpc;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'availabilityZones',
            baseName: 'availabilityZones',
            type: 'Array<string>',
        },
        {
            name: 'elb',
            baseName: 'elb',
            type: 'IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerAwsElb',
        },
        {
            name: 'region',
            baseName: 'region',
            type: 'string',
        },
        {
            name: 'tags',
            baseName: 'tags',
            type: '{ [key: string]: string; }',
        },
        {
            name: 'vpc',
            baseName: 'vpc',
            type: 'IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerAwsVpc',
        },
    ];

    static getAttributeTypeMap() {
        return IoMesosphereKommanderV1beta1KonvoyClusterSpecProvisionerAws.attributeTypeMap;
    }
}
