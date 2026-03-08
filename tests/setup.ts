import '@testing-library/jest-dom';

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => { }, // Deprecated
        removeListener: () => { }, // Deprecated
        addEventListener: () => { },
        removeEventListener: () => { },
        dispatchEvent: () => false,
    }),
});

class MockObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
}

window.IntersectionObserver = MockObserver as any;
window.ResizeObserver = MockObserver as any;
