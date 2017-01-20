import $ from 'jquery';
import _ from 'lodash';

import Macros from './components/macro';

const jQuery = $;

class MailBuilder {
  constructor () {
    this.macros = new Macros();

    this.SELECTORS = {
      app: $('#app'),
      editors: {
        row: {
          selector: '[data-editable-row]',
          inline: true,
          menubar: false,
          toolbar: 'undo redo'
        },
        editor: {
          selector: '[data-editable-editor]',
          inline: true,
          menubar: false,
          schema: 'html5-strict',
          // Context options
          contextmenu: 'paste copy link unlink bold italic underline striketh' +
                  'rough removeformat sub sup',
          contextmenu_never_use_native: true,
          // Link Options
          link_context_toolbar: true,
          link_assume_external_targets: true,
          default_link_target: '_blank',
          // Plugins
          plugins: 'autolink contextmenu hr legacyoutput link lists paste',
          toolbar: 'undo redo format forecolor backcolor hr link unlink bulli' +
                  'st numlist paste bold italic underline strikethrough justi' +
                  'fyleft justifycenter justifyfull'
        },
        logo: {
          selector: '[data-editable-logo]',
          inline: true,
          menubar: false,
          toolbar: ''
        }
      }
    }

    this.ignored = [];
    this.bindEvents();
    this.initPlugins();
  }

  initPlugins() {
    const options = this.SELECTORS.editors;

    _.forOwn(options, (configuration) => {
      tinymce.init(configuration);
    })
  }

  bindEvents() {
    const self = this;

    this.parseHTML();
  }

  parseHTML() {
    const regex = this.macros.regex;
    const app = this.SELECTORS.app;
    const self = this;
    let html = app.html();
    let found, replacement;

    while(found = regex.exec(html)) {
      replacement = self.macros.getItem(found[0]);
      if (replacement) {
        html = html.replace(found[0], replacement.value);
      }
    }

    app.html(html);
    this.initPlugins();
  }

  submitHandler(data) {
    console.log(data);
  }

  build() {
    return true;
  }
}

$(document).ready(() => {
  const mailApp = new MailBuilder();
});

