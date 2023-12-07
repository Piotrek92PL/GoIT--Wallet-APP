import { Helmet } from 'react-helmet';
import { BackgroundContainer } from 'components/BackgroundContainer/BackgroundContainer';
import { NavBalanceCurrency } from 'components/NavBalanceCurrency/NavBalanceCurrency';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';

export default function HomePage() {
  return (
    <BackgroundContainer>
      <Helmet>
        <title>Finance manager</title>
      </Helmet>
      <NavBalanceCurrency />
      <TransactionsList />
    </BackgroundContainer>
  );
}
