import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id:'q1', author: 'Kaushal', text: 'Learning react is great' },
  { id:'q2', author: 'KaushalK', text: 'Learning react is super' },
]

const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
};

export default Quotes;
