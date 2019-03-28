import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { menu } from '../../reducers';
import './Footer.css';

class FooterElement extends Component {
  constructor(props) {
    super(props);
    this.footerRef = React.createRef();
  }

  componentDidMount() {
    this.props.actions.setRefContacts(this.footerRef);
  }

  render() {
    return (
      <div ref={this.footerRef} className="footer__wrapper">
        <div className="footer">
          <div className="footer__line" />
          <div className="footer__info">
            <a
              className="footer__developer"
              target="_blank"
              href="https://chernyshov.netlify.com/"
            >
              {/* <div className="footer__developer_text">Разработано</div> */}
              <div className="footer__developer_by">by</div>
              <div className="footer__developer_me">Chernyshov</div>
            </a>
            <a className="footer__email" href={`mailto:support@techcatch.ru`}>
              <div className="email-text">support@techcatch.ru</div>
              <div className="email-img" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const dispatchMapToProps = (dispatch) => ({
  actions: {
    setRefContacts: bindActionCreators(menu.setRefContacts, dispatch),
  },
});

const Footer = connect(
  null,
  dispatchMapToProps
)(FooterElement);

export { Footer };
