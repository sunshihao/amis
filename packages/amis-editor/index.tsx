/**
 * @file entry of this example.
 * @author fex
 */
import * as React from 'react';
import {createRoot} from 'react-dom/client';
import App from './examples/App';
//
import './examples/style.scss';
import '../amis-editor-core/scss/editor.scss';
import '../amis-ui/scss/themes/cxd.scss';
// import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
// import '../../../node_modules/@fortawesome/fontawesome-free/css/v4-shims.css';

import './public-path.js';

export function bootstrap(mountTo: HTMLElement, initalState: any) {
  const root = createRoot(mountTo);
  root.render(<App />);
}
