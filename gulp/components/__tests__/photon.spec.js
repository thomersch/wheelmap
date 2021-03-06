jest.dontMock('../photon');

const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const Photon = require('../photon');

describe("React Photon component", function() {

  it("loads correctly", function() {
    var component = TestUtils.renderIntoDocument(
      <Photon/>
    );

    expect(component).toBeDefined();
  });

});
