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
import { getProviderProfileDetails } from '@/services/userServices';

// import { levelsWithQuestionType, OptionType } from '@/app/propTypes';
// import { getCompetency } from '@/services/getCompetency';

// interface WpcasContextValue {
//   competencyArray: OptionType[];
//   levelsWithQuestion: levelsWithQuestionType[];
//   setLevelsWithQuestion: (levels: levelsWithQuestionType[]) => void;
//   currentCompetency: number | null;
//   setCurrentCompetency: (are: number | null) => void;
//   viewQuestions: boolean;
//   setViewQuestions: (val: boolean) => void;
//   currentLevelsAnsQuestions: levelsWithQuestionType[];
//   setCurrentLevelsAndQuestions: (levels: levelsWithQuestionType[]) => void;
// }

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
  handleUserProfile: () => void;
  // handleSetProviderId: (id: string) => void
  setActiveComponent: (arg: string) => void;
  activeComponent: string;
};

const AuthProvider = createContext<AuthContextType>({
  providerId: '',
  userProfileData: userProfileInitData,
  handleUserProfile: () => {
    return null;
  },
  //  handleSetProviderId: () => { return null }
  setActiveComponent: () => {
    return null;
  },
  activeComponent: '',
});

// const WpcasProvider = createContext('');

const AuthContext = ({ children }: { children: React.ReactElement }) => {
  const providerId = localStorage.getItem('3cpToken') || '';
  // const [providerId, setProviderId] = useState(id)
  const [activeComponent, setActiveComponent] = useState<string>('ACCEPTED');
  const [userProfileData, setUserProfileDate] = useState(userProfileInitData);
  const router = useRouter();

  const handleUserProfile = useCallback(async () => {
    try {
      const data = await getProviderProfileDetails(providerId);
      setUserProfileDate(data);
    } catch (error) {
      // Handle any errors that occur during the API call
      // eslint-disable-next-line no-console
      console.error('API call error:', error);
      toast.error('something went wrong');
    }
  }, [providerId]);

  // const handleSetProviderId = (id: string) => {
  //   setProviderId(id)
  // }

  useEffect(() => {
    if (!providerId) {
      router.push('/login');
      return;
    } else {
      handleUserProfile();
      router.push('my-courses');
    }
  }, [router, providerId, handleUserProfile]);

  return (
    <AuthProvider.Provider
      value={{
        providerId,
        // handleSetProviderId,
        userProfileData,
        handleUserProfile,
        activeComponent,
        setActiveComponent,
      }}
    >
      {children}
    </AuthProvider.Provider>
  );
};

export const useAuthContext = () => useContext(AuthProvider);
export default AuthContext;
