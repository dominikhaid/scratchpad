import {POST_BYSLUG} from '@/hooks/GraphqlQuerys';
import {useQuery} from '@apollo/react-hooks';
import MainDimmer from '@/components/loader/MainDimmer';
import {SplitArray} from '@/hooks/Array';

export default function LoadPostBySlug({postContext, setPosts, findPost}) {
  if (!process.browser || !postContext.postItems || (findPost && findPost > -1))
    return <></>;

  let {data, loading, error, fetchMore} = useQuery(POST_BYSLUG, {
    slug: process.browser
      ? window.location.pathname.replace(/\/blog\//gm, '')
      : '',
  });

  if (data) {
    let newPosts = postContext.postItems
      ? [...postContext.postItems, data.data.postBy]
      : [data.data.postBy];

    postContext.setPostContext(
      newPosts,
      Math.ceil(newPosts.length / postContext.visibleItems),
      SplitArray(newPosts, postContext.visibleItems),
      true,
      {data, fetchMore},
    );

    setPosts(newPosts);
  }

  if (error) {
    console.error(error);
  }

  return <MainDimmer />;
}
