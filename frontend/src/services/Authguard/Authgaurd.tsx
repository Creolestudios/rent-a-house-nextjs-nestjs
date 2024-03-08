import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { getLocalItem } from './config';

type IProps = {
  secure: boolean;
  role: string;
  children: any;
};

const Authguard: FC<IProps> = ({ secure, role, children }) => {
  const router = useRouter();
  const adminRoute = router.asPath.split('/')[1];

  useEffect(() => {
    const isTokenAvailable = getLocalItem('token');
    const isAdmin = sessionStorage.getItem('role');

    switch (true) {
      case secure && !isTokenAvailable && role === '2':
        router.push('/admin/login');
        break;
      case secure && !isTokenAvailable && role === 'user':
        router.push('/home');
        break;
      case secure &&
        isTokenAvailable &&
        role !== isAdmin &&
        adminRoute === 'admin':
        router.push('/admin/login');
        break;
    }
  }, [adminRoute]);

  return children;
};

export default Authguard;
