const path = require('path');


// use gatsby create pages api and query for all product slugs
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
        allItems: allContentfulGear {
        nodes {
          productSlug
        }
      }
    }
  `);


 // create page for each product and list
// them all in /products/:productSlug 
data.allItems.nodes.forEach(item => {
    createPage({
      path: `products/${item.productSlug}`,
      component: path.resolve('./src/templates/gear.js'),
      context: {
         // Data passed to context is available
         // in page queries as GraphQL variables.
        slug: item.productSlug,
      },
    });
  });

};