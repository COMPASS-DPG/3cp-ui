'use client';
import { useRouter } from 'next/navigation';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';

import { userType } from '@/app/my-account/page';
import { CourseType } from '@/app/my-courses/page';
import {
  getCourseByProviderId,
  getProviderProfileDetails,
} from '@/services/userServices';

const userProfileInitData = {
  name: '',
  orgLogo: '',
  orgName: '',
  email: '',
  phone: '',
  paymentInfo: {
    bankName: '',
    branchName: '',
    IFSC: '',
    PANnumber: '',
    GSTnumber: '',
    accNo: '',
  },
};

type AuthContextType = {
  providerId: string;
  userProfileData: userType;
  handleUserProfile: (id: string) => void;
  handleSetProviderId: (id: string) => void;
  setActiveComponent: (arg: string) => void;
  activeComponent: string;
  fetchData: boolean;
  setFetchData: (arg: boolean) => void;
  courseList: CourseType[];
  setCourseList: (arg: CourseType[]) => void;
};

const AuthProvider = createContext<AuthContextType>({
  providerId: '',
  userProfileData: userProfileInitData,
  handleUserProfile: () => {
    return null;
  },
  handleSetProviderId: () => {
    return null;
  },
  setActiveComponent: () => {
    return null;
  },
  activeComponent: '',
  fetchData: true,
  setFetchData: () => {
    return null;
  },
  courseList: [],
  setCourseList: () => {
    return null;
  },
});

const AuthContext = ({ children }: { children: React.ReactElement }) => {
  const [providerId, setProviderId] = useState('');
  const [activeComponent, setActiveComponent] = useState<string>('ACCEPTED');
  const [userProfileData, setUserProfileDate] = useState(userProfileInitData);
  const [fetchData, setFetchData] = useState(true);
  const [courseList, setCourseList] = useState<CourseType[]>([]);
  const router = useRouter();

  const handleCourseData = useCallback(
    async (id: string) => {
      try {
        const data = await getCourseByProviderId(id);
        setCourseList(data);
        setFetchData(false);
      } catch (error) {
        // Handle any errors that occur during the API call
        setTimeout(() => {
          // eslint-disable-next-line no-console
          console.error('API call error:', error);
          toast.error('something went wrong', {
            draggable: false,
          });
          router.push('/error/DataNotFound');
        }, 5000);
      }
    },
    [router]
  );

  const handleUserProfile = useCallback(
    async (id: string) => {
      try {
        const data = await getProviderProfileDetails(id);
        setUserProfileDate(data);
        handleCourseData(id);
      } catch (error) {
        // Handle any errors that occur during the API call
        setTimeout(() => {
          // eslint-disable-next-line no-console
          console.error('API call error:', error);
          toast.error('something went wrong', {
            draggable: false,
          });
          router.push('/error/DataNotFound');
        }, 5000);
      }
    },
    [handleCourseData, router]
  );

  const handleSetProviderId = (id: string) => {
    setProviderId(id);
  };

  useEffect(() => {
    const id = localStorage.getItem('3cpToken') || '';
    if (!id) {
      router.push('/login');
      return;
    } else {
      setProviderId(id);
      handleUserProfile(id);
      router.push('my-courses');
    }
  }, [router, providerId, handleUserProfile]);

  useEffect(() => {
    if (fetchData && providerId) {
      handleCourseData(providerId);
    }
  }, [fetchData, handleCourseData, providerId]);

  return (
    <AuthProvider.Provider
      value={{
        providerId,
        handleSetProviderId,
        userProfileData,
        handleUserProfile,
        activeComponent,
        setActiveComponent,
        fetchData,
        setFetchData,
        courseList,
        setCourseList,
      }}
    >
      {children}
    </AuthProvider.Provider>
  );
};

export const useAuthContext = () => useContext(AuthProvider);
export default AuthContext;
