import React from 'react';
import { defineMessages, FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import styles from '../../../styles/cspace-ui/About.css';

const messages = defineMessages({
  title: {
    id: 'about.title',
    description: 'Title of the about page.',
    defaultMessage: 'Bem-vindo ao CollectionSpace',
  },
  contentHTML: {
    id: 'about.contentHTML',
    description: 'Content of the about page. This message is interpreted as HTML, so HTML rules apply. For example, newlines are ignored, and <, >, and & must be escaped.',
    defaultMessage: `
      <p>
        CollectionSpace é um aplicativo de gestão de coleções suportado pela comunidade para museus, 
        sociedades históricas, coleções de ciências naturais e outros.
      </p>
    `,
  },
});

export default function About() {
  return (
    <div className={styles.common}>
      <h2><FormattedMessage {...messages.title} /></h2>
      <FormattedHTMLMessage {...messages.contentHTML} tagName="div" />
    </div>
  );
}
