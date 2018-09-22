/* eslint-env node */

import React from 'react';
import { join } from 'path';

import { render, Workspace, requireComponent } from 'workflow-react';
const { SplitV } = requireComponent('workflow-layout-tiled');
const { Atom } = requireComponent('workflow-app-atom');

export const flow = render(
  <Workspace name={'workflow-server-atom'}>
    <SplitV>
      <Atom percent={0.5} file={__filename} />
      <Atom percent={0.5} file={join(__dirname, '../package.json')} />
    </SplitV>
  </Workspace>
);
