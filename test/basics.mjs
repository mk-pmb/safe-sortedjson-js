// -*- coding: utf-8, tab-width: 2 -*-

import equal from 'equal-pmb';

import ssj from '../ssj.js';


const data1 = { foo: 23, bar: 42, sub: { color: 'yellow' } };

equal.lines(ssj(data1), [
  '{ "bar": 42,',
  '  "foo": 23,',
  '  "sub": {',
  '    "color": "yellow"',
  '  }',
  '}',
]);


equal.lines(ssj(data1, { space: 0 }), [
  '{"bar":42,"foo":23,"sub":{"color":"yellow"}}',
]);


equal.lines(ssj(data1, { mergeNlWsp: true }), [
  '{"bar": 42, "foo": 23, "sub": {"color": "yellow"}}',
]);


equal(ssj(undefined), undefined);
equal(ssj(undefined, { undef: null }), null);








console.info('+OK basics tests passed');
