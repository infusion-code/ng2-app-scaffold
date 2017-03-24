import { StorageService, LocalStorageService, SessionStorageService } from "../services/storageService";

export function LocalStorage(storageKey: string, key?: string) {
    return WebStorage(LocalStorageService.Instance(storageKey), key);
}

export function SessionStorage(storageKey: string, key?: string) {
    return WebStorage(SessionStorageService.Instance(storageKey), key);
}

export let WebStorage = (service: StorageService, key: string) => {
    return (target: Object, propertyName: string): void => {
        key = key || propertyName;
        let storedValue = service.get(key);

        Object.defineProperty(target, propertyName, {
            get: function() {
                return service.get(key);
            },
            set: function(value: any) {
                if (!cache[key]) {
                    // first setter handle
                    if (storedValue === null) {
                        // if no value in localStorage, set it to initializer
                        service.set(key, value);
                    }
                    cache[key] = true;
                    return;
                }
                service.set(key, value);
            },
        });
    }
}
let cache:any = {};
