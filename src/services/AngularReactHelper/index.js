import angular from 'angular';
import ReactDOM from 'react-dom';
import React from 'react';
import { mapValues } from 'lodash';

function render(element, Component, props) {
    ReactDOM.render(
        <Component { ...props } />,
        element,
    );
}

function toBindings(propTypes) {
    return mapValues(propTypes, () => '<');
}

function toProps(propTypes, controller) {
    return mapValues(propTypes, (val, key) => {
        return controller[key];
    });
}

export function getAngularService(document, name) {
    const injector = angular.element(document.body).injector() || {};
    return injector.get(name);
}

export function reactToAngularComponent(Component) {
    const { propTypes = {} } = Component;
    return {
        bindings: toBindings(propTypes),
        controller: /*@ngInject*/ function controller($scope, $element) {
            this.$onChanges = () => render($element[0], Component, toProps(propTypes, this));
            this.$onDestroy = () => ReactDOM.unmountComponentAtNode($element[0]);
        },
    };
}

