import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const CardGroup: React.FC<HTMLProps<HTMLUListElement>> = ({ className, ...rest }) => (
  <ul className={classNames('nhsuk-grid-row nhsuk-card-group', className)} {...rest} />
);

export default CardGroup;
