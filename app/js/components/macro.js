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
      {'key':'[[COMPANY_LOGO]]', 'value': 'Bedrijfs logo'},
      {'key':'[[QUESTIONS]]', 'value': 'Link naar vacature vragen'},
      {'key':'[[FOOTER]]', 'value': 'Standaard mail afsluiting'},
      {'key':'[[DIENSTVERBAND]]', 'value': 'Lijst van dienstverbanden'}
    ]
  }

  get items() {
    return this._macros;
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
