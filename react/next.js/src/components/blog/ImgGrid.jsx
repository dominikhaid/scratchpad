import React from 'react';
import {Grid, GridColumn} from 'semantic-ui-react';
import {returnHTML} from '@/hooks/HeFunctions';

export default function ImgGrid(props) {
  let imgArray = [];
  const createArraysFromString = () => {
    let content = props.mainContent.replace(/\n*\r*/gm, '');
    imgArray.push(content.match(/<figure(.*?)>(.*?)<\/figure>/gm));
  };

  createArraysFromString();
  return (
    <Grid columns="equal">
      {imgArray[0].map(e => {
        return (
          <GridColumn
            className="wp-img-grid"
            dangerouslySetInnerHTML={returnHTML(e)}
          />
        );
      })}
    </Grid>
  );
}
