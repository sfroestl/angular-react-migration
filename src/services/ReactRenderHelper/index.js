import React from 'react';
import ReactDOM from 'react-dom';

export default class Renderer {
    constructor(getter) {
        this.roots = new Map();
        this.getter = getter;
        this.updateComponent();
    }

    updateComponent() {
        const required = this.getter();
        this.Component = required.default || required;
    }

    register(element, $scope) {
        if ($scope) {
            $scope.$on('$destroy', () => {
                this.roots.delete(element);
                ReactDOM.unmountComponentAtNode(element);
            });
        }
        return this.renderSingle.bind(this, element);
    }

    render() {
        this.updateComponent();
        this.roots.forEach((props, element) => this.renderSingle(element, props));
    }

    renderSingle(element, props) {
        this.roots.set(element, props);
        ReactDOM.render(
            <this.Component { ...props } />,
            element,
        );
    }
}
