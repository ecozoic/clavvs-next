import React from 'react';

import Paragraph from './Paragraph';
import Widget from './Widget';

const Content = ({ content }) => (
  <>
    {content.type === 'paragraph' && (
      <Paragraph header={content.header} text={content.text} />
    )}
    {content.type === 'widget' && (
      <Widget name={content.name} props={content.props} />
    )}
  </>
);

export default Content;
