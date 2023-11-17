import { PUBLIC_DATOCMS_TOKEN } from "$env/static/public";


const QUERY = `
query MyQuery {
  allArticles {
    id
    title
    story
    introtext
    image {
      url
    }
  }
}
`;

export async function load({ fetch, params }) {
  const { slug } = params
  const response = await fetch('https://graphql.datocms.com', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${PUBLIC_DATOCMS_TOKEN}`,
    },
    body: JSON.stringify({
      query: QUERY,
      variables: { slug }
    }),
  });
  
  const { data } = await response.json();
  console.log(data)
  
  return { data };
};