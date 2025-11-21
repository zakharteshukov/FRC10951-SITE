<script>
	let mobileMenuOpen = $state(false);

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' },
	];
</script>

<nav class="sticky top-0 z-50 bg-background border-b border-border shadow-lg">
	<div class="container">
		<div class="flex justify-between items-center py-4">
			<a href="/" class="text-2xl font-bold text-primary"> Your Website </a>

			<!-- Desktop Menu -->
			<ul class="hidden md:flex gap-8">
				{#each navItems as item}
					<li>
						<a href={item.href} class="text-text hover:text-primary transition-colors font-medium">
							{item.label}
						</a>
					</li>
				{/each}
			</ul>

			<!-- Mobile Menu Toggle -->
			<button
				class="md:hidden flex flex-col gap-1.5"
				onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Toggle menu"
			>
				<span
					class="w-6 h-0.5 bg-text transition-all"
					class:rotate-45={mobileMenuOpen}
					class:translate-y-2={mobileMenuOpen}
				></span>
				<span class="w-6 h-0.5 bg-text transition-all" class:opacity-0={mobileMenuOpen}></span>
				<span
					class="w-6 h-0.5 bg-text transition-all"
					class:-rotate-45={mobileMenuOpen}
					class:-translate-y-2={mobileMenuOpen}
				></span>
			</button>
		</div>

		<!-- Mobile Menu -->
		<div
			class="md:hidden overflow-hidden transition-all duration-300"
			class:max-h-64={mobileMenuOpen}
			class:max-h-0={!mobileMenuOpen}
		>
			<ul class="flex flex-col gap-4 py-4 border-t border-border">
				{#each navItems as item}
					<li>
						<a
							href={item.href}
							class="block text-text hover:text-primary transition-colors font-medium"
							onclick={() => (mobileMenuOpen = false)}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
