/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var EX, soj = require('sortedjson'), unv = require('univeil');

function circ() { return '[Circular]'; }


EX = function safeSortedJsonify(data, opt) {
  if (!opt) { opt = false; }
  if (data === undefined) { return opt.undef; }
  if (!opt.circular) {
    opt = Object.assign({}, opt);
    opt.circular = circ;
  }
  var sp = opt.space;
  if (sp === undefined) {
    if (opt.mergeNlWsp) { sp = 1; }
  }
  data = soj(data, opt.replacer, sp, opt);
  // console.debug({ ssj: data });
  if (opt.mergeNlWsp) { data = data.replace(/(?:(,)\n( )|\n)\s*/g, '$1$2'); }
  data = unv(data, '\n');
  return data;
};


EX.cfg = function (opt) {
  return function preconfiguredSafeSortedJson(data) { return EX(data, opt); };
};


module.exports = EX;
