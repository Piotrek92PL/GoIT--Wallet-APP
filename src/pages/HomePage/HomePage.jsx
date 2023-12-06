import { Helmet } from 'react-helmet';
import { BackgroundContainer } from 'components/BackgroundContainer/BackgroundContainer';
import { NavBalanceCurrency } from 'components/NavBalanceCurrency/NavBalanceCurrency';
import { ButtonAddTransaction } from 'components/ButtonAddTransaction/ButtonAddTransaction';
import { Balance } from 'components/Balance/Balance';

export default function HomePage() {
  return (
    <BackgroundContainer>
      <Helmet>
        <title>Finance manager</title>
      </Helmet>
      <NavBalanceCurrency />
      <Balance />
      <ButtonAddTransaction/>
    </BackgroundContainer>
  );
}
