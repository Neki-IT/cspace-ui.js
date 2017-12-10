import React from 'react';
import { render } from 'react-dom';
import { MemoryRouter as Router } from 'react-router';
import { IntlProvider } from 'react-intl';

import createTestContainer from '../../../helpers/createTestContainer';

import NavBar from '../../../../src/components/navigation/NavBar';

chai.should();

const expectedClassName = 'cspace-ui-NavBar--common';

describe('NavBar', function suite() {
  beforeEach(function before() {
    this.container = createTestContainer(this);
  });

  it('should render as a nav', function test() {
    render(
      <IntlProvider locale="en">
        <Router>
          <NavBar />
        </Router>
      </IntlProvider>, this.container);

    this.container.firstElementChild.nodeName.should.equal('NAV');
  });

  it('should render with correct class', function test() {
    render(
      <IntlProvider locale="en">
        <Router>
          <NavBar />
        </Router>
      </IntlProvider>, this.container);

    this.container.firstElementChild.className.should.equal(expectedClassName);
  });
});
