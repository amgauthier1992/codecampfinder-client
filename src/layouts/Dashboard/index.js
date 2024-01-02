import { useIsLargerThanMd } from '../../_helpers/breakpoint';
import DashboardDesktop from './desktop';
import DashboardMobile from './mobile';

const DashboardLayout = () => {
  const isLargerThanMd = useIsLargerThanMd();

  return isLargerThanMd ? <DashboardDesktop /> : <DashboardMobile />;
};

export default DashboardLayout;
