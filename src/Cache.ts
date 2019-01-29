export interface Cache
{
    /**
     * Get the requested item from the cache.
     * @param id 
     */
    get(id: string): any;

    /**
     * Determine if the selected item is currently stored.
     * @param id 
     */
    has(id: string): boolean;
    
    /**
     * Save a new item to the cache.
     * @param id 
     * @param data 
     * @param ttl 
     */
    save(id: string, data: any, ttl: number): any;

    /**
     * Remove an item from the cache.
     * @param id 
     */
    delete(id: string): boolean;
}