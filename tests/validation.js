import test from 'ava';
import validation from '../lib/validation';

const input = {
  target: {
    name: 'text',
    value: 'foo bar baz',
  },
  all: {
    text: 'foo bar baz',
  },
};

const settings = {
  target: {
    empty: false,
  },
  all: {
    text: {
      empty: false,
    },
  },
};


// Valid input
test('valid input', t => {
  t.true(validation(input, settings), 'Valid input returns true');
});

