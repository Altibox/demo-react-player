import Player from '../src';

import React from 'react';
import {render} from 'react-dom';

render(
  <Player
    posterUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6R1ZGR9xFmnvQbskqkzhdjLmWuVg7RjLzwZielV2XJ-vsWL6H7ZkMuQ" 
    playing={true}
    url="http://techslides.com/demos/sample-videos/small.mp4"
  />,
  document.getElementById('app')
);
