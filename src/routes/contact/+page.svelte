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
		<h1 class="heading-2 text-center mb-8 text-primary">Contact Us</h1>
		<div class="container-narrow">
			<div class="card mb-6">
				<p class="text-lead text-muted mb-0">
					Have a question or want to get in touch? Fill out the form below and we'll get back to you
					as soon as possible.
				</p>
			</div>

			<form on:submit={handleSubmit} class="card">
				<div class="flex-col flex-gap-lg">
					<div>
						<label for="name" class="label"> Your Name </label>
						<input
							type="text"
							id="name"
							name="name"
							required
							class="input"
							placeholder="Your Name"
						/>
					</div>

					<div>
						<label for="email" class="label"> Your Email </label>
						<input
							type="email"
							id="email"
							name="email"
							required
							class="input"
							placeholder="your.email@example.com"
						/>
					</div>

					<div>
						<label for="message" class="label">
							Your Message
						</label>
						<textarea
							id="message"
							name="message"
							required
							rows="5"
							class="textarea"
							placeholder="Your Message"
						/>
					</div>

					<button type="submit" class="btn btn-primary w-full">Send Message</button>
				</div>
			</form>
		</div>
	</div>
</section>
