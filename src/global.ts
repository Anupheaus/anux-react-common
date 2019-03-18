import 'anux-common';
import * as ReactObj from 'react';
import * as ReactDOMObj from 'react-dom';

declare global {
  const React: typeof ReactObj;
  const ReactDOM: typeof ReactDOMObj;
}
