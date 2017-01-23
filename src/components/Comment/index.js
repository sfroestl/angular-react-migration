import angular from 'angular';
import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './presenter';

const render = (element, props) => {
    ReactDOM.render(
        <Comment { ...props } />,
        element
    );
}

module.exports = angular.module('ngReactExample.comment', [
]).component('comment', {
    bindings: {
        comment: '<',
    },
    controller: function($element) {
        const $ctrl = this;
        $ctrl.$onChanges = () => render($element[0], { comment: $ctrl.comment });
    }
});
