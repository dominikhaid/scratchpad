import {SplitArray} from '@/hooks/Array';

export default function (data, fetchMore, postContext, setPosts) {
  fetchMore({
    variables: {
      cursor: data.posts.pageInfo.endCursor,
    },
    updateQuery: (previousResult, {fetchMoreResult}) => {
      let newEdges = fetchMoreResult.posts.nodes;
      const pageInfo = fetchMoreResult.posts.pageInfo;

      if (newEdges.length) {
        let newPosts = [
          ...postContext.postItems,
          ...fetchMoreResult.posts.nodes,
        ];

        postContext.setPostContext(
          newPosts,
          Math.ceil(newPosts.length / postContext.visibleItems),
          SplitArray(newPosts, postContext.visibleItems),
          pageInfo.hasNextPage,
        );
        setPosts(newPosts);
      } else {
        postContext.hasNextPage = pageInfo.hasNextPage;
        setPosts(postContext.postItems);
      }

      return newEdges.length
        ? {
            posts: {
              __typename: previousResult.posts.__typename,
              nodes: [...previousResult.posts.nodes, ...newEdges],
              pageInfo,
            },
          }
        : previousResult;
    },
  });
}
