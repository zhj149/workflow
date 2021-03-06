/* eslint-env node */
import React from 'react';
import { render, Workspace, requireComponent } from 'workflow-react';

const { Emacs } = requireComponent('{{packageName}}');

export const flow = render(
  <Workspace name={'workflow-app-example'}>
    <Emacs file={__filename} />
  </Workspace>
);
