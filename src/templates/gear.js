import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { documentToReactComponents, renderRichText } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';


// run template query
export const query = graphql`
  query GearQuery($slug: String!) {
    item: contentfulGear(productSlug: { eq: $slug }) {
      id
      productSlug
      productName
      detailedDiscription {
        raw
      }

      image {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      
      price
    }
  }
`;

const StyledImage = styled(Img)`
  width: 30rem;
  height: 30rem;
`;

const GearTemplate = ({ data: { item } }) => {
  const options = {
    // options for rich text formating
  };

  return (
    <Layout>
        hello)
      <h2>{console.log('item=',JSON.parse(item.detailedDiscription.raw))}</h2>
      <StyledImage fluid={item.image.fluid} />
      {/* render the rich text format description */}
      <main>{documentToReactComponents(JSON.parse(item.detailedDiscription.raw))}</main>
    </Layout>
  );
};

export default GearTemplate;