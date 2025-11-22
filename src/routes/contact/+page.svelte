<!--
	CONTACT PAGE
	Route: /contact
	Description: Contact form for visitors to reach out to the team
-->
<script lang="ts">
	function handleSubmit(e: Event) {
		e.preventDefault();
		const target = e.target as HTMLFormElement;
		const formData = new FormData(target);
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			message: formData.get('message'),
		};

		// TODO: Implement form submission to backend API
		// For now, show success message
		alert('Thank you for your message! We will get back to you soon.');
		target.reset();
	}
</script>

<section class="section">
	<div class="container">
		<h1 class="text-4xl font-bold text-center mb-12 text-primary">Contact Us</h1>
		<div class="max-w-2xl mx-auto">
			<div class="card mb-8">
				<p class="text-lg text-text-light mb-6">
					Have a question or want to get in touch? Fill out the form below and we'll get back to you
					as soon as possible.
				</p>
			</div>

			<form on:submit={handleSubmit} class="card">
				<div class="space-y-6">
					<div>
						<label for="name" class="block text-sm font-medium mb-2 text-text"> Your Name </label>
						<input
							type="text"
							id="name"
							name="name"
							required
							class="w-full px-4 py-3 bg-background border-2 border-border rounded-lg text-text focus:outline-none focus:border-primary transition-colors"
							placeholder="Your Name"
						/>
					</div>

					<div>
						<label for="email" class="block text-sm font-medium mb-2 text-text"> Your Email </label>
						<input
							type="email"
							id="email"
							name="email"
							required
							class="w-full px-4 py-3 bg-background border-2 border-border rounded-lg text-text focus:outline-none focus:border-primary transition-colors"
							placeholder="your.email@example.com"
						/>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium mb-2 text-text">
							Your Message
						</label>
						<textarea
							id="message"
							name="message"
							required
							rows="5"
							class="w-full px-4 py-3 bg-background border-2 border-border rounded-lg text-text focus:outline-none focus:border-primary transition-colors resize-vertical"
							placeholder="Your Message"
						/>
					</div>

					<button type="submit" class="btn-primary w-full">Send Message</button>
				</div>
			</form>
		</div>
	</div>
</section>
