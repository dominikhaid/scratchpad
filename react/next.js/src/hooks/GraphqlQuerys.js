import {gql} from 'apollo-boost';

export const MENU_ITEMS = gql`
  {
    menus(where: {location: PRIMARY}) {
      edges {
        node {
          menuId
          slug
          name
          menuItems {
            edges {
              node {
                menuItemId
                label
                childItems {
                  nodes {
                    label
                    menuItemId
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const PAGE_ITEMS = gql`
  {
    pages(where: {status: PUBLISH}) {
      nodes {
        content
        dateGmt
        excerpt
        pageId
        slug
        status
        title
        childPages {
          nodes {
            content
            title
            pageId
            excerpt
            isFrontPage
            slug
            status
          }
        }
      }
    }
  }
`;

export const MENU_PAGE_ITEMS = gql`
  {
    menus(where: {location: PRIMARY}) {
      edges {
        node {
          menuId
          slug
          name
          menuItems {
            edges {
              node {
                menuItemId
                label
                childItems {
                  nodes {
                    label
                    menuItemId
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
    pages(where: {status: PUBLISH}) {
      nodes {
        content
        dateGmt
        excerpt
        pageId
        slug
        status
        title
        childPages {
          nodes {
            content
            title
            pageId
            excerpt
            isFrontPage
            slug
            status
          }
        }
      }
    }
  }
`;

export const POST_ITEMS = gql`
 query Posts($cursor: String) {
  posts(first: 10, after: $cursor, where: {status: PUBLISH, orderby: {field: DATE, order: DESC}}) {
    nodes {
      dateGmt
      content
      postId
      title
      slug
      excerpt
      status
      featuredImage {
        node {
          altText
          mediaItemUrl
          title
        }
      }
      terms {
        nodes {
          ... on Category {
            name
            slug
          }
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
} 
`;

export const POST_BYSLUG = gql`
  query PostBy($slug: String!) {
    postBy(slug: $slug) {
      dateGmt
      content
      postId
      title
      slug
      excerpt
      status
        featuredImage {
        node {
          altText
          mediaItemUrl
          title
        }
      }
       terms {
        nodes {
          ... on Category {
            name
            slug
          }
        }
      }
    }
  }
`;
