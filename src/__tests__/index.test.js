import Validator from '../index';

test.each([
  ['ghjkjhf', true],
  ['ghjk]jhf', false],
  ['-ghjkjhf', false],
  ['4ghjkjhf', false],
  ['_ghjkjhf', false],
  ['ghjkjhf-', false],
  ['ghjkjhf_', false],
  ['ghjkjhf4', false],
  ['gh4jkjhf', true],
  ['gh5jk5jhf', true],
  ['gh5jk555jhf', true],
  ['gh555jkj555hf', true],
  ['gh555jk5jhf', true],
  ['gh5jk5555jhf', false],
  ['gh5555jk5jhf', false],
  ['gh5555jk5555jhf', false],
  ['', false],

])(
  ('testing %s'),
  (userrname, expected) => {
    const res = Validator.validateUsername(userrname);
    expect(res).toEqual(expected);
  },
);
