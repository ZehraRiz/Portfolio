exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
    query GetProjects{
  projects: allContentfulProjects {
    nodes {
      slug
      
    }
  }
}
`);

	result.data.projects.nodes.forEach((project) => {
		createPage({
			path: `/projects/${project.slug}`,
			component: require.resolve("./src/templates/ProjectTemplate.js"),
			context: {
				slug: project.slug
			}
		});
	});
};
