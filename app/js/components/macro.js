export default class Macros {
  constructor() {
    this._macros = [
      {'key':'[[VOORNAAM]]', 'value': 'Voornaam kandidaat'},
      {'key':'[[ACHTERNAAM]]', 'value': 'Achternaam kandidaat'},
      {'key':'[[EMAIL]]', 'value': 'E-mail adres kandidaat'},
      {'key':'[[AFZENDER]]', 'value': 'E-mail adres afzender'},
      {'key':'[[RECRUITER_TEL]]', 'value': 'Telefoonnummer van afzender'},
      {'key':'[[LINK]]', 'value': 'Link naar vacature'},
      {'key':'[[VACATURE_TITEL]]', 'value': 'Vacature titel'},
      {'key':'[[COMPANY]]', 'value': 'Bedrijfsnaam'},
      {'key':'[[COMPANY_URL]]', 'value': 'Bedrijfs website'},
      {'key':'[[COMPANY_LOGO]]', 'value': 'https://www.youngcapital.nl/public_images/Image/company_logo/logo-yc.png'},
      {'key':'[[QUESTIONS]]', 'value': 'Link naar vacature vragen'},
      {'key':'[[FOOTER]]', 'value': 'Standaard mail afsluiting'},
      {'key':'[[DIENSTVERBAND]]', 'value': 'Lijst van dienstverbanden'},
      {
        'key':'[[SOLICTTER_DIRECT]]',
        'value': '<a href="#" style="cursor:auto;color:#ff7700;font-family: Arial, Helvetica, sans-serif, \'Open Sans\';font-size:13px;line-height:45px;text-align:right;">Direct Link</a>'
      }
    ]

    this._regex = new RegExp('\[\[[A-Z_]*\]\]', 'g');
  }

  get items() {
    return this._macros;
  }

  get regex() {
    return this._regex;
  }

  getItem(name) {
    const _item = this._getConvertedMacro(name);
    if (_item.length) {
      return _item[0];
    }
    return false;
  }

  _getConvertedMacro(name) {
    var self = this;
    return this._macros.filter(function(obj, index) {
      return obj.key == name;
    })
  }
}
