/**
 * Utility for lazy loading Svelte components with Intersection Observer
 */

export interface ComponentLoadOptions {
	rootMargin?: string;
	threshold?: number;
}

/**
 * Create a lazy-loaded component loader that loads when element is about to be visible
 */
export function createLazyComponentLoader<T>(
	importFn: () => Promise<{ default: T }>,
	options: ComponentLoadOptions = {}
): {
	load: (element: HTMLElement | null, callback: (component: T) => void) => () => void;
} {
	const { rootMargin = '100px', threshold = 0.1 } = options;

	return {
		load: (element: HTMLElement | null, callback: (component: T) => void) => {
			if (!element) {
				return () => {};
			}

			let loaded = false;

			const observer = new IntersectionObserver(
				async (entries) => {
					const entry = entries[0];
					if (entry.isIntersecting && !loaded) {
						loaded = true;
						try {
							const module = await importFn();
							callback(module.default);
						} catch (error) {
							// Component loading failed - could implement retry logic or error boundary here
							// For now, silently fail to avoid console errors in production
							if (import.meta.env.DEV) {
								console.error('Failed to load component:', error);
							}
						}
						observer.disconnect();
					}
				},
				{ rootMargin, threshold }
			);

			observer.observe(element);

			return () => observer.disconnect();
		}
	};
}

