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
 * CustomResourceColumnDefinition specifies a column for server side printing.
 */
export class V1CustomResourceColumnDefinition {
    /**
     * description is a human readable description of this column.
     */
    'description'?: string;
    /**
     * format is an optional OpenAPI type definition for this column. The \'name\' format is applied to the primary identifier column to assist in clients identifying column is the resource name. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
     */
    'format'?: string;
    /**
     * jsonPath is a simple JSON path (i.e. with array notation) which is evaluated against each custom resource to produce the value for this column.
     */
    'jsonPath': string;
    /**
     * name is a human readable name for the column.
     */
    'name': string;
    /**
     * priority is an integer defining the relative importance of this column compared to others. Lower numbers are considered higher priority. Columns that may be omitted in limited space scenarios should be given a priority greater than 0.
     */
    'priority'?: number;
    /**
     * type is an OpenAPI type definition for this column. See https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#data-types for details.
     */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'description',
            baseName: 'description',
            type: 'string',
        },
        {
            name: 'format',
            baseName: 'format',
            type: 'string',
        },
        {
            name: 'jsonPath',
            baseName: 'jsonPath',
            type: 'string',
        },
        {
            name: 'name',
            baseName: 'name',
            type: 'string',
        },
        {
            name: 'priority',
            baseName: 'priority',
            type: 'number',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return V1CustomResourceColumnDefinition.attributeTypeMap;
    }
}
