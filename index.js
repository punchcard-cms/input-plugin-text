'use strict';

/**
 * Text Input Plugin
 *
 *
 * An input plugin for a single text file
 */
const validation = require('./lib/validation.js');

/**
 * Single Text Input Plugin
 * @module textInputPlugin
 */
module.exports = {
  name: 'Text',
  description: 'An input plugin for a single text file',
  validation: {
    textValidation: validation,
  },
  inputs: {
    text: {
      validation: {
        function: 'textValidation',
        on: 'blur',
      },
      label: 'Add Your Text',
      placeholder: 'Text Goes Here',
      type: 'text',
    },
  },
  html: '<label for="{{text.id}}">{{text.label}}</label><input type="{{text.type}}" id="{{text.id}}" name="{{text.name}}" value="{{text.value}}" placeholder="{{text.placeholder}}" />',
};
