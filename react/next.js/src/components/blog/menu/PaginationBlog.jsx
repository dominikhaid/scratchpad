import LoadMore from '@/components/blog/menu/LoadMore';
import {Pagination} from 'semantic-ui-react';

export default function PaginationBlog({
  postContext,
  setPosts,
  activePage,
  setActivePage,
}) {
  const boundaryRange = 1;
  const showEllipsis = true;
  const showFirstAndLastNav = false;
  const showPreviousAndNextNav = true;
  const lastItem = false;
  const fetchMore = postContext.gql.fetchMore;
  const data = postContext.gql.data;

  const handlePaginationChange = e => {
    postContext.pagination = Math.ceil(e);
    if (postContext.visibleArray.length - 1 === e && postContext.hasNextPage) {
      LoadMore(data, fetchMore, postContext, setPosts);
    }
    document.querySelector('main').scrollTo(0, 0);
    setActivePage(Math.ceil(e));
  };

  return (
    <div
      className="flex-con flex-center"
      style={{position: 'relative', width: '100%'}}
    >
      <Pagination
        activePage={activePage}
        totalPages={postContext.pages}
        boundaryRange={boundaryRange}
        onPageChange={e => {
          handlePaginationChange(Number(e.target.getAttribute('value')));
        }}
        size="mini"
        ellipsisItem={showEllipsis ? undefined : null}
        firstItem={showFirstAndLastNav ? undefined : null}
        lastItem={lastItem}
        prevItem={showPreviousAndNextNav ? undefined : null}
        nextItem={showPreviousAndNextNav ? undefined : null}
      />
    </div>
  );
}
