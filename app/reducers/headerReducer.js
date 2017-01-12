export default function reducer(
  state = {
    logo: 'https://www.youngcapital.nl/public_images/Image/company_logo/logo-yc.png',
    shortCodeValue: '[[SOLICITEER_DIRECT]]',
    shortCode: 'Solliciteer direct!'
  }, action)  {
  switch (action.type) {
    case 'UPDATE_SHORTCODE': {
      return { ...state, shortCodeValue: action.data.shortCodeValue };
    }
    case 'TRANSFORM_SHORTCODE': {
      return { ...state, shortCode: action.data.shortCode };
    }
    case 'UPDATE_LOGO': {
      return { ...state, logo: action.data.logo };
    }
    default: {
      return state;
    }
  }
}
