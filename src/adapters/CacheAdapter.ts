import { register as getCodependency } from "codependency";
import { Cache } from '../Cache';
let requirePeer = getCodependency(module);

export class CacheAdapter implements Cache {
    private cache: any;

    constructor() {
        this.cache = requirePeer("cache");
    }

    public get(id: string): any {
        return this.cache.get(id);
    }

    public has(id: string): boolean {
        return this.get(id) !== null;
    }

    public save(id: string, data: any, ttl: number): void {
        this.cache.put(id, data, (ttl * 60000));
    }

    public delete(id: string): boolean {
        this.save(id, null, 1);

        return true;
    }
}