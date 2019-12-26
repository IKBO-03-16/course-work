import article from 'src/components/Article';
import api from 'src/components/API';

import './index.css';

const root = document.getElementById('root');

let articlesInfo = [];

api().then(json => {
  console.log(json.query.pages);
  Object.values(json.query.pages).forEach(props => {
    articlesInfo.push(article(props));
  });

  let ul = document.createElement('ul');
  articlesInfo.forEach(articleInfo => {
    ul.append(articleInfo);
  });
  root.append(ul);
});
