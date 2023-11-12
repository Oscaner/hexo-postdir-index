/* global hexo */
'use strict';

const _findIndex = require('lodash.findindex');
const fs = require('fs');
const path = require('path');

module.exports = function(locals) {
  const metas = [];

  console.log(locals.theme);

  (locals.posts.data || []).forEach(post => {
    const pathSpliter = post.path.split('/') || []

    let i = pathSpliter.length; while (i--) {
      if (i === 0) continue;

      const path = pathSpliter.slice(0, i).join('/');
      const metaIndex = _findIndex(metas, { path: path });
      const meta = metaIndex > -1 ? metas[metaIndex] : {
        path: path,
        data: [],
        layout: 'postdir'
      }

      meta.data.push({
        path: pathSpliter.slice(0, i + 1).join('/'),
        post: i + 1 === length ? post : undefined,
      });

      metas[metaIndex] = meta;
    }
  });

  console.log(metas);

  return [
    // {
    //   path: '/dir',
    //   data: 'dir 下的所有 dir 和 post',
    //   layout: 'postdir'
    // }
  ];
};
