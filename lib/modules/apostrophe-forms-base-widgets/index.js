module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Form base widget',
  addFields: [
    {
      name: 'fieldLabel',
      label: 'Field Label',
      type: 'string',
      required: true
    },
    {
      name: 'fieldName',
      label: 'Field Name',
      type: 'string',
      help: 'No spaces or punctuation other than dashes. If left blank, the form will populate this with a simplified form of the label. Changing this field after a form is in use may cause problems with any integrations.'
    }
  ],
  construct: function (self, options) {
    const superSanitize = self.sanitize;
    self.sanitize = function (req, input, callback) {
      if (!input.fieldName) {
        input.fieldName = self.apos.utils.slugify(input.fieldLabel);
      }

      return superSanitize(req, input, callback);
    };

  }
};