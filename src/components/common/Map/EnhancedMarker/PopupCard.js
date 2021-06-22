import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'hooks';
import { deleteTarget as deleteTargetAction } from 'state/actions/targetActions';
import { useTargetTopic } from 'state/selectorHooks';
import { object } from 'prop-types';

const PopupCard = ({ target }) => {
  const deleteTargetRequest = useDispatch(deleteTargetAction);
  const targetTopic = useTargetTopic(target.topicId);
  const intl = useIntl();

  const deleteTarget = targetId => {
    if (window.confirm(intl.formatMessage({ id: 'target.delete.confirm' }))) {
      deleteTargetRequest(targetId);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>{`${target.title}, ${targetTopic?.label}`}</span>
      <div style={{ alignSelf: 'center' }}>
        <button type="button" onClick={() => deleteTarget(target.id)}>
          {intl.formatMessage({ id: 'common.delete' })}
        </button>
      </div>
    </div>
  );
};

PopupCard.propTypes = {
  target: object.isRequired
};

export default PopupCard;
