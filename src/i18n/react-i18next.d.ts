import { resources, defaultNS } from './i18n'

/**
 * i18next type extendations are placed here
 */
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['fa'];
  };
};
