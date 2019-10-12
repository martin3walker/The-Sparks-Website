import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import Copy from './copy.js';

const defaultOptions = {
  [BLOCKS.PARAGRAPH]: (node, children) => {
    const value = node.content[0].value;
    return value === '' ? <br /> : <Copy as="p">{children}</Copy>;
  }
};

class RichTextRenderer extends React.Component {
  render() {
    const { data, extendedOptions, handlers } = this.props;
    const embedded = extendedOptions && {
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        const type = node.data.target.sys.contentType.sys.id;
        const Component = extendedOptions[type];
        return <Component handlers={handlers} node={node} />;
      }
    };
    const inline = {
      [BLOCKS.INLINE_ENTRY]: (node, children) => {
        const type = node.data.target.sys.contentType.sys.id;
        const Component = extendedOptions[type];
        return <Component node={node} />;
      }
    };
    const options = {
      renderNode: {
        ...defaultOptions,
        ...embedded,
        ...inline
      }
    };
    return <div>{documentToReactComponents(data, options)}</div>;
  }
}

export default RichTextRenderer;
