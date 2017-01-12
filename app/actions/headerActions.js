export function updateShortcode(value) {
  return {
    type: 'UPDATE_SHORTCODE',
    data: {
      value: value
    }
  };
}

export function transformShortcode() {
  return {
    type: 'TRANSFORM_SHORTCODE',
    data: {
      value: 'Solliciteer direct!'
    }
  };
}

export function updateLogo(url) {
  return{
    type: 'UPDATE_LOGO',
    data: {
      logo: url
    }
  };
}
