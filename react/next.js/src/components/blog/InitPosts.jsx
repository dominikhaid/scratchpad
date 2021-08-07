import {useQuery} from '@apollo/react-hooks';
import {POST_ITEMS} from '@/hooks/GraphqlQuerys';
import {SplitArray} from '@/hooks/Array';
import MainDimmer from '@/components/loader/MainDimmer';

export default function InitPosts({postContext, setPosts}) {
  if (postContext.postItems) return <></>;

  let {data, loading, error, fetchMore} = useQuery(POST_ITEMS);

  if (data) {
    let posts = data.posts.nodes;
    postContext.setPostContext(
      posts,
      Math.ceil(posts.length / postContext.visibleItems),
      SplitArray(posts, postContext.visibleItems),
      true,
      {data, fetchMore},
    );
    setPosts(posts);
  }

  if (error) {
    console.error(error);
  }

  return <MainDimmer />;
}
