const path = require('path');
//add page route here
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/pages/index.js`)
  },
  {
    path: '/next-page',
    component: path.resolve(`src/pages/page-2.js`)
  },
  {
    path: '/pagina-successiva',
    component: path.resolve(`src/pages/page-2.js`)
  },
  //next page route for french language 
  {
    path: '/page-suivante',
    component: path.resolve(`src/pages/page-2.js`)
  },
];