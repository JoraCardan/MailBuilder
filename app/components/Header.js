import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/headerActions';

@connect((store) => {
  return {
    logo: store.headerReducer.logo,
    shortCodeValue: store.headerReducer.shortCodeValue,
    shortCode: store.headerReducer.shortCode
  };
})

export default class Header extends React.Component {
  componentWillMount() {
    console.log(actions);
  }

  editHandler(e) {
    e.preventDefault();
  }

  render() {
    const { logo, shortCode, shortCodeValue } = this.props;

    const mainWrapperStyle = {
      width: '600px',
      background: '#F4F4F4',
      margin: '0 auto',
      border: '0'
    };

    const subChildStyles = Object.assign({}, mainWrapperStyle, {
      'fontSize': 0,
      'width': '100%',
      'borderCollapse': 'collapse',
      'msoTableLspace': '0pt',
      'msoTableRspace': '0pt'
    });

    const headerStyles = Object.assign({}, subChildStyles, {
      'padding': '0 20px'
    });

    const columnStyle = {
      'verticalAlign': 'top',
      'display': 'inline-block',
      'fontSize': '13px',
      'textAlign': 'left',
      'width': '100%'
    };

    const tableStyle = {
      'borderCollapse': 'collapse',
      'msoTableLspace': '0pt',
      'msoTableRspace': '0pt'
    };

    const imgStyle = {
      'border': 'none',
      'display': 'block',
      'outline': 'none',
      'textDecoration': 'none',
      'width': '50px',
      'height': 'auto',
      'lineHeight': '100%',
      'textAlign': 'right',
      'msInterpolationMode': 'bicubic'
    };

    const contentStyle = {
      'wordBreak': 'break-word',
      'fontSize': '0px',
      'padding': '10px 0px',
      'textAlign': 'right',
      'borderCollapse': 'collapse',
      'msoTableLspace': '0pt',
      'msoTableRspace': '0pt'
    };

    const linkStyle = {
      'cursor': 'text',
      'color': '#ff7700',
      'fontFamily': 'Arial, Helvetica, sans-serif, \'Open Sans\'',
      'fontSize': '13px',
      'lineHeight': '45px',
      'textAlign': 'right'
    };

    return (
      <div style={mainWrapperStyle}>
        <table cellPadding="0" cellSpacing="0" style={subChildStyles}>
          <tbody>
            <tr>
              <td className="header" style={headerStyles} >
                <div
                  aria-labelledby="mj-column-per-100"
                  className="mj-column-per-100"
                  style={columnStyle}
                >
                  <table cellPadding="0" cellSpacing="0" width="100%" style={tableStyle}>
                    <tbody>
                      <tr>
                        <td style={subChildStyles}>
                          <table cellPadding="0" cellSpacing="0" style={tableStyle}>
                            <tbody>
                              <tr>
                                <td width="50" style={tableStyle}>
                                  <img alt="" height="auto" src={ logo } style={imgStyle} />
                                </td>
                                <td width="550" style={contentStyle}>
                                  <div
                                    style={linkStyle}
                                    onClick={this.editHandler.bind(this)}
                                    data-shortcode-value={shortCodeValue}
                                  >
                                    { shortCode }
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
