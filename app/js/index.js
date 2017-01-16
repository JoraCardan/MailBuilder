import $ from 'jquery';

import Macros from './components/macro';

class MailBuilder {
  constructor () {
    this.macros = new Macros();
    // macros.getItem('[[COMPANY_LOGO]]')
  }

  build() {
    return true;
  }
}

