export declare class Filter {
    keySize: number;
    n: number;
    p: number;
    m: number;
    blockHash: Uint8Array;
    filterValues: Set<number>;
    /**
     * Create a Golomb-Rice encoded set filter handler for a particular block.
     * @param blockHash - The hash block corresponding to the filter object.
     * @param filterData - The compact filter for the block.
     */
    constructor({ blockHash, filterData, p, m }: {
        blockHash: Uint8Array | string;
        filterData: Uint8Array;
        p?: number;
        m?: number;
    });
    /**
     * Determine whether some data likely matches the filter.
     * @param data - The public key script or serialized outpoint to be matched
     */
    match({ data }: {
        data: Uint8Array;
    }): boolean;
    /**
     * Determine whether a list of Base64 encoded strings likely matches the filter
     * @param values - A list of data as Base64 encoded strings to match
     */
    matchAllBase64(values: string[]): boolean;
    /**
     * Determine whether a list of Uint8Arrays likely matches the filter
     * @param values - A list of data as Uint8Arrays to match
     */
    matchAllU8(values: Uint8Array[]): boolean;
    /**
     * Get the numberic value corresponding to the data
     * @param data - A Uint8Array to match
     */
    private _getFilterValue;
    private _intersection;
    /**
     * Parse the compact filter for a block and return a set of numeric values.
     * @param rawFilter - The filter as a binary numeric array
     * @param p - The bucket size of the Golomb encoding
     */
    private _gcsGetFilterValues;
    /**
     * Transform the filter from an Uint8Array to type number[] of 1/0s
     * @param f - A Uint8Array to match
     */
    private _gscFilterToArray;
    /**
     * Get the decimal value of the first eight bits of a binary array
     * @param f - a binary array provided as an array of numbers
     */
    private _gcsGetFilterSize;
}
