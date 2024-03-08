/** @format */

import React, { FC, Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './locales';
import messages from './messages/index';

type IProps = {
  children: any;
  locale: string;
};

const Provider: FC<IProps> = ({
  children,
  locale = LOCALES.ENGLISH,
}): JSX.Element => (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}>
    {children}
  </IntlProvider>
);

export default Provider;
