import React from 'react';

export default ShortCodes {
  shortCodeList = {
    '[[SOLICITEER_DIRECT]]': 'Solliciteer direct!',
    '[[LINK]]': 'Direct Link',
    '[[SIGNATURE]]': 'Signature'
  }

  getList () {
    return this.shortCodeList;
  }

  updateList (newList) {
    Object.assign(this.shortCodeList, newList);
  }
}
