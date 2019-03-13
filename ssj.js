/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var soj = require('sortedjson'), unv = require('univeil');

function circ() { return '[Circular]'; }

function safeSortedJsonify(data, opt) {
  if (!opt) { opt = false; }
  if (!opt.circular) {
    opt = Object.assign({}, opt);
    opt.circular = circ;
  }
  data = soj(data, opt.replacer, opt.space, opt);
  data = unv(data, '\n');
  return data;
}

module.exports = safeSortedJsonify;
