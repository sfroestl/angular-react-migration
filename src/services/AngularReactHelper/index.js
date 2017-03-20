import angular from 'angular';
import { mapValues } from 'lodash';

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

export function reactToAngularComponent(renderer) {
    const { propTypes = {} } = renderer.Component;
    return {
        bindings: toBindings(propTypes),
        controller: /*@ngInject*/ function controller($scope, $element) {
            const render = renderer.register($element[0], $scope);
            this.$onInit = this.$onChanges = () => render(toProps(propTypes, this));
        },
    };
}
