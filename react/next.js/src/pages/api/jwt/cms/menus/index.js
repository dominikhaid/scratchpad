import {checkReqErrors} from '@/includes/status';
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);
import {MENU_ITEMS} from '@/hooks/GraphqlQuerys';
import {gqlFetchClient} from '@/hooks/GraphQlCon';

export default (req, res) => {
  if (req.method === 'GET') {
    gqlFetchClient()
      .query({
        query: MENU_ITEMS,
      })
      .then(result => {
        const menuItems = {menus: []};
        menuItems.menus = result.data.menus.edges[0].node.menuItems.edges.map(
          element => {
            let id = element.node.label.replace('-', '').toLowerCase();
            let nodeItems = [];
            // let returnTmp ={}
            for (
              let index = 0;
              index < element.node.childItems.nodes.length;
              index++
            ) {
              const item = element.node.childItems.nodes[index];
              let url = item.url.replace(/^.*\/wordpress\//g, '/');
              if (url === '/') url = '/print-und-screendesign/';
              nodeItems.push({
                label: item.label,
                menuItemId: item.menuItemId,
                url: url,
              });
            }

            return {
              id: element.node.menuItemId,
              label: element.node.label,
              items: nodeItems,
            };
          },
        );
        writeFile(
          './src/data/menus.js',
          'module.exports = ' + JSON.stringify(menuItems),
        ).then(checkReqErrors({menuItems: menuItems}, res));
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
