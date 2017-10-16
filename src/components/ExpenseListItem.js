import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// load a locale
numeral.register('locale', 'eur', {
  delimiters: {
      thousands: ',',
      decimal: '.'
  },
  abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
  },
  // ordinal : function (number) {
  //     return number === 1 ? 'st' : number ==='ème';
  // },
  currency: {
      symbol: '€'
  }
});

// switch between locales
numeral.locale('eur');

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format('$0,0.00')}
      -
      {moment(createdAt).format('MMM Do, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;
