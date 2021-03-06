/**
 * @flow
 * @file Translate button component used by Comment Text component
 */

import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import PlainButton from '../../../../components/plain-button';

import messages from '../../../common/messages';

type Props = {
    handleTranslate: Function,
};

const TranslateButton = ({ handleTranslate }: Props): React.Node => (
    <PlainButton className="bcs-comment-translate" onClick={handleTranslate}>
        <FormattedMessage {...messages.commentTranslate} />
    </PlainButton>
);

export default TranslateButton;
