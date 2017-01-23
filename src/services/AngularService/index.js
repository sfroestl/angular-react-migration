import angular from 'angular';

export function getAngularService(name) {
    const injector = angular.element(document.body).injector();
    if (injector) {
        return injector.get(name);
    }
}
