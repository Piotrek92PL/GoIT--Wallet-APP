import { Helmet } from 'react-helmet';
import { BackgroundContainer } from 'components/BackgroundContainer/BackgroundContainer';
import { NavBalanceCurrency } from 'components/NavBalanceCurrency/NavBalanceCurrency';
//  import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import { ButtonAddTransaction } from 'components/ButtonAddTransaction/ButtonAddTransaction';
import css from './HomePage.module.css';
import { useMediaQuery } from 'react-responsive';

export default function HomePage() {
  const isMobilTablet = useMediaQuery({ maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let lineStyle;

  if (isDesktop) {
    lineStyle = ` ${css.lineDesktop}`;
  } else if (isMobilTablet) {
    lineStyle = ` ${css.lineMobileTablet}`;
  }

  return (
    <BackgroundContainer>
      <Helmet>
        <title>Finance manager</title>
      </Helmet>
      <NavBalanceCurrency />
      <div className={lineStyle}></div>
      {/* <TransactionsList /> */}
      <ButtonAddTransaction />
    </BackgroundContainer>
  );
}
