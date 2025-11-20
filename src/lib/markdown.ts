import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface Post {
	slug: string;
	title: string;
	date: string;
	content: string;
	excerpt?: string;
}

export async function getPostBySlug(slug: string, folder: string): Promise<Post | null> {
	const fullPath = path.join(contentDirectory, folder, `${slug}.md`);

	if (!fs.existsSync(fullPath)) {
		return null;
	}

	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	const processedContent = await remark().use(remarkHtml).process(content);
	const contentHtml = processedContent.toString();

	return {
		slug,
		title: data.title || slug,
		date: data.date || '',
		content: contentHtml,
		excerpt: data.excerpt
	};
}

export async function getAllPosts(folder: string): Promise<Post[]> {
	const folderPath = path.join(contentDirectory, folder);

	if (!fs.existsSync(folderPath)) {
		return [];
	}

	const files = fs.readdirSync(folderPath);
	const posts = await Promise.all(
		files
			.filter((file) => file.endsWith('.md'))
			.map(async (file) => {
				const slug = file.replace(/\.md$/, '');
				return await getPostBySlug(slug, folder);
			})
	);

	return posts
		.filter((post): post is Post => post !== null)
		.sort((a, b) => {
			if (a.date < b.date) return 1;
			if (a.date > b.date) return -1;
			return 0;
		});
}
