import React, { ComponentProps, HTMLProps } from 'react';
import classNames from 'classnames';
import { ColWidth } from '../../../util/types/NHSUKTypes';

interface CardGroupItemProps extends HTMLProps<HTMLLIElement> {
  width: ColWidth
}

const CardGroupItem: React.FC<CardGroupItemProps> = ({ className, width, ...rest }) => (
  <li className={classNames(`nhsuk-grid-column-${width} nhsuk-card-group__item`, className)} {...rest} />
);

export default CardGroupItem;
