// @flow
/* eslint-disable no-console, global-require, no-restricted-syntax, import/no-dynamic-require */
import os from 'os';
import type { WorkspaceConfig } from '../index';
import RequireWrapper from '../util/require';

export default function load(name: string): WorkspaceConfig {
  const options = [
    name,
    `${os.homedir()}/.workflow/${name}`,
    `${process.cwd()}/examples/${name}`,
  ];

  for (const option of options) {
    try {
      const config = RequireWrapper.require(option);
      console.log(`Loaded: ${option}`);
      return config;
    } catch (e) { /* ignored */ }
  }

  console.log(`Could not load '${name}'`);
  console.log('Tried:');
  options.forEach(option => console.log(` - ${option}`));
  process.exit(1);
  // $FlowSuppress
  return null;
}