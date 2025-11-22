/**
 * Utility for lazy loading images with Intersection Observer
 */

export interface ImageLoadOptions {
	rootMargin?: string;
	onLoad?: () => void;
	onError?: (error: Error) => void;
}

/**
 * Lazy load an image using Intersection Observer
 * @param imagePath - Path to the image
 * @param element - Element to observe
 * @param options - Configuration options
 * @returns Cleanup function
 */
export function lazyLoadImage(
	imagePath: string,
	element: HTMLElement | null,
	options: ImageLoadOptions = {}
): () => void {
	if (!element) {
		return () => {};
	}

	const { rootMargin = '50px', onLoad, onError } = options;
	let imageLoaded = false;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !imageLoaded) {
					const img = new Image();
					img.src = imagePath;
					img.onload = () => {
						imageLoaded = true;
						if (element) {
							element.style.backgroundImage = `url('${imagePath}')`;
						}
						onLoad?.();
						observer.disconnect();
					};
					img.onerror = () => {
						const error = new Error(`Failed to load image: ${imagePath}`);
						onError?.(error);
						observer.disconnect();
					};
				}
			});
		},
		{ rootMargin }
	);

	observer.observe(element);

	return () => observer.disconnect();
}

