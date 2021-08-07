import {checkReqErrors} from '@/includes/status';
import {PAGE_ITEMS} from '@/hooks/GraphqlQuerys';
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
import {gqlFetchClient} from '@/hooks/GraphQlCon';

export default (req, res) => {
  if (req.method === 'GET') {
    gqlFetchClient()
      .query({
        query: PAGE_ITEMS,
      })
      .then(result => {
        const pageItems = {pages: []};

        pageItems.pages = result.data.pages.nodes.map(element => {
          return {
            pageId: element.pageId,
            menuItemLabel: element.label,
            menuItemId: element.menuItemId,
            excerpt: element.excerpt,
            dateGmt: element.dateGmt,
            slug: element.slug,
            title: element.title,
            content: element.content,
            childPages: element.childPages,
          };
        });
        writeFile(
          './src/data/pages.js',
          'module.exports = ' + JSON.stringify(pageItems),
        ).then(checkReqErrors({pageItems: pageItems}, res));
      })
      .catch(err => {
        checkReqErrors({error: err}, res);
      });
  } else {
    checkReqErrors({error: 'No End Point to this Request'}, res);
  }
};

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};
