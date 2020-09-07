require("dotenv").config();

module.exports = {
	plugins: [
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `ms32o5otnl3a`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`
	]
};
