import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Person } from '../../types';

type Props = {
  person: Person,
};

const WOMEN_MALE = 'f';

export const PersonalLink: React.FC<Props> = ({ person }) => {
  return (
    <Link
      to={`/people/${person?.slug}`}
      className={cn({ 'has-text-danger': person?.sex === WOMEN_MALE })}
    >
      {person?.name}
    </Link>
  );
};
