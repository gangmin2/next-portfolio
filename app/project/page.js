import ProjectItem from './project-item';

const { Client } = require('@notionhq/client');
const notion = new Client({
	auth: process.env.NOTION_API_KEY,
});

async function getData() {
	const res = await notion.databases.query({
		database_id: '5633096e8640437fa43af066b6ba136a',
		sorts: [
			{
				property: 'Project',
				direction: 'ascending',
			},
		],
	});

	if (!res.ok) {
		console.error('Failed to fetch data');
	}

	return res.results;
}

export default async function Page() {
	const data = await getData();

	return (
		<main style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', padding: '32px' }}>
			{data.map(item => <ProjectItem data={item} />)}
		</main>
	)
}