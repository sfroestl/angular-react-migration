import ReactRenderHelper from '../../services/ReactRenderHelper';

const renderer = new ReactRenderHelper(() => require('./presenter').default);

if (module.hot) {
    module.hot.accept('./presenter', () => renderer.render());
}

export default renderer;
