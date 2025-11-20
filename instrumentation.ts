export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Create a localStorage polyfill for server-side
    const storage = {
      getItem: (_key: string) => null,
      setItem: (_key: string, _value: string) => {},
      removeItem: (_key: string) => {},
      clear: () => {},
      key: (_index: number) => null,
      length: 0,
    };

    // Define as a non-configurable property to prevent overwrites
    try {
      Object.defineProperty(globalThis, 'localStorage', {
        value: storage,
        writable: false,
        configurable: false,
      });
    } catch (e) {
      // If already defined, try to replace it
      (globalThis as any).localStorage = storage;
    }
  }
}
