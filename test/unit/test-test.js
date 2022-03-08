import {expect} from "chai";
import Sinon from "sinon";
import HTMLElement from "./../mocks/html-element.js";

describe("Test suit", async function () {

    after(async function () {
        Sinon.restore();
    });

    it("test custom component sets value to 20", async function () {

        //Arrange
        globalThis.HTMLElement = HTMLElement;
        globalThis.customElements = {
            define: () => {
            }
        };
        const component = await import("./../../webcomponents/test-component/test-component.js");

        //Act
        const instance = new component.TestComponent();
        const elementStub = {innerText: Sinon.spy()};
        Sinon.stub(instance, "querySelector").returns(elementStub);
        await instance.setProperties();

        //Assert
        expect(instance.elem).to.not.be.undefined;
        expect(instance.elem.innerText).to.eq("20");
    });

    it("test lib", async function () {
        //Arrange
        const lib = await import("./../../lib/some-lib.js");
        //Act
        const result = lib.aplusb(1, 2);
        //Assert
        expect(result).to.eq(3);
    });
});