/* global hexo */
'use strict';

// hexo.config.postdir_index = Object.assign({
// }, hexo.config.postdir_index)

hexo.extend.generator.register('_postdir_index', require('./lib/postdir_index'));
