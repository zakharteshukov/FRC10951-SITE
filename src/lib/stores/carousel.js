import { writable } from 'svelte/store';

export const currentIndex = writable(0);
export const autoRotate = true;
export const rotateInterval = 10000; // 10 seconds

