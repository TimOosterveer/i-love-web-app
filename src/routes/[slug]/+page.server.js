import { PUBLIC_DATOCMS_TOKEN } from '$env/static/public';
export async function load({ fetch, params }) {
	const { slug } = params;
	const response = await fetch('https://graphql.datocms.com', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${PUBLIC_DATOCMS_TOKEN}`
		},
		body: JSON.stringify({
			query: QUERY,
			variables: { slug }
		})
	});

	const { data } = await response.json();

	return  data ;
}

const QUERY = `query article($slug: String) {
  article(filter: {slug: {eq: $slug}}) {
    title,
		introtext,
		story,
		image {
      url
    }
  }
}`;
