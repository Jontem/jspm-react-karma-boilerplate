import {assert} from "chai";
import TestUtils from "react-addons-test-utils";
import * as React from "react";
import DOM from "react-dom";
import {HelloWorld} from "../src/hello_world_component";


describe("Hello world component", function () {

    it("should should display the text hello world", function () {
        var renderer = TestUtils.createRenderer();
        const result = renderer.render(<HelloWorld />);

        assert.equal(result.type, "div");
        assert.deepEqual(result.props.children, [
            <h1 onClick={undefined}>Hello world</h1>,
            <span>test</span>]);
    });

    it("simulate click", function () {
        let clicked = false;
        var component = TestUtils.renderIntoDocument(<HelloWorld callback={() => clicked = true }/>);
        const componentNode = DOM.findDOMNode(component);
        TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithTag(component, 'h1'));

        assert.isTrue(clicked);
    });
});