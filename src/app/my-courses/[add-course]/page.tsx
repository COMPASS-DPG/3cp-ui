'use client';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { isValidFormData } from '@/lib/helper';

import ButtonFill from '@/components/button/ButtonFill';
import ButtonOutline from '@/components/button/ButtonOutline';
import CommonModal from '@/components/CommonModal';
import { outfit } from '@/components/FontFamily';
import AddCompetencyAndLevel from '@/components/newCourseForm/AddCompetencyAndLevel';
import CourseAddSuccessPopup from '@/components/newCourseForm/CourseAddSuccessPopup';
import CourseCard from '@/components/newCourseForm/CourseCard';
import NewCourseForm from '@/components/newCourseForm/NewCourseForm';

import { CompetencyType } from '@/app/my-courses/page';
import { useAuthContext } from '@/context/AuthContext';

export type CompetencyAndLevelsType = CompetencyType;

export type NewCourseFormType = {
  courseId?: string;
  title: string;
  imageLink: string | File;
  description: string;
  language: string[];
  credits: number | string;
  courseLink: string;
  author: string;
  startDate: Date | null;
  endDate: Date | null;
  competency: CompetencyAndLevelsType[];
};

export type NewCourseFormErrorType = {
  [key: string]: string;
  title: string;
  imageLink: string;
  description: string;
  language: string;
  credits: string;
  courseLink: string;
  author: string;
  startDate: string;
  endDate: string;
};

const initialError = () => {
  return {
    title: '',
    imageLink: '',
    description: '',
    language: '',
    credits: '',
    courseLink: '',
    author: '',
    startDate: '',
    endDate: '',
  };
};

const initialData = () => {
  return {
    title: '',
    imageLink: '',
    description: '',
    language: [],
    credits: '',
    courseLink: '',
    author: '',
    startDate: new Date(),
    endDate: null,
    competency: [{ name: '', id: '', levels: [] }],
  };
};

// will check for all competency and levels input
const isValidCompetency = (competency: CompetencyAndLevelsType[]) => {
  if (competency?.length == 0) {
    toast.error('competency and levels are required', {
      draggable: false,
    });
    return false;
  }
  for (let i = 0; i < competency?.length; i++) {
    if (!competency[i]?.name || competency[i]?.levels?.length == 0) {
      toast.error('competency and levels are required', {
        draggable: false,
      });
      return false;
    }
  }
  return true;
};

const AddNewCourse = () => {
  const searchParams = useSearchParams();
  const { courseList } = useAuthContext();
  const router = useRouter();
  const [disabledUpload, setDisabledUpload] = useState(true);
  const courseId = searchParams.get('courseId') ?? '';

  const editCourseData =
    courseList?.find((item) => item?.courseId == courseId) ?? null;

  const [formData, setFormData] = useState<NewCourseFormType>(
    editCourseData ?? initialData()
  );
  const [error, setError] = useState<NewCourseFormErrorType>(initialError());
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const handleFormError = (key: string, value: string) => {
    setError((pre) => {
      return {
        ...pre,
        [key]: value,
      };
    });
  };

  const handleFormData = (
    key: string,
    value: string | Date | File | string[]
  ) => {
    if (error?.[key]) {
      setError((pre) => {
        return {
          ...pre,
          [key]: '',
        };
      });
    }
    // will disable upload button
    if (disabledUpload) {
      setDisabledUpload(false);
    }
    setFormData((pre) => {
      return {
        ...pre,
        [key]: value,
      };
    });
  };

  const handleDelete = (ind: number) => {
    // will disable upload button
    if (disabledUpload) {
      setDisabledUpload(false);
    }
    const newData = [...formData.competency];
    newData.splice(ind, 1);
    setFormData((pre) => {
      return {
        ...pre,
        competency: newData,
      };
    });
  };

  const handleAddValue = (data: CompetencyAndLevelsType) => {
    // will disable upload button
    if (disabledUpload) {
      setDisabledUpload(false);
    }
    setFormData((pre) => {
      return {
        ...pre,
        competency: [...pre.competency, data],
      };
    });
  };

  const handleCompetencyAndLevelsData = (
    data: CompetencyAndLevelsType,
    index: number
  ) => {
    const newData = [...formData.competency];
    newData.splice(index, 1, data);
    if (disabledUpload) {
      setDisabledUpload(false);
    }
    setFormData((pre) => {
      return {
        ...pre,
        competency: newData,
      };
    });
  };

  const handleSubmit = () => {
    setError(initialError());
    if (isValidFormData(formData, handleFormError)) {
      if (isValidCompetency(formData?.competency)) {
        setPreview(true);
      }
    }
  };

  return (
    <div
      className={`mx-[30px] mt-[20px] flex  justify-center rounded-lg bg-[#ffF] p-[30px] text-[14px] text-[#6F747E] ${outfit.className}`}
    >
      <div className='w-[90%]'>
        {/* modal to show course send for admin approval success */}
        <CommonModal
          isOpen={successPopup}
          onClose={() => setSuccessPopup(false)}
          isCrossShow={false}
        >
          <CourseAddSuccessPopup onClose={() => setSuccessPopup(false)} />
        </CommonModal>

        {/* modal to show preview of form */}
        <CommonModal
          isOpen={preview}
          onClose={() => setPreview(false)}
          isCrossShow={false}
        >
          <CourseCard
            image={image}
            data={formData}
            onClose={() => setPreview(false)}
            handleSuccessModal={() => setSuccessPopup(true)}
          />
        </CommonModal>
        <p className='text-sm text-[#ED2B2B]  '>(All fields are mandatory)</p>
        <NewCourseForm
          image={image}
          handleImage={(value) => setImage(value)}
          error={error}
          data={formData}
          onChange={handleFormData}
        />
        <div className='mt-5 text-base font-semibold text-[#272728]'>
          Add Competencies & Levels
        </div>
        <div className=' border-b border-solid border-[#D8D8D8]'></div>
        {formData?.competency?.map((data, ind, totalData) => {
          return (
            <div
              key={ind}
              className={
                formData?.competency.length - 1 !== ind ? 'w-[95%]' : 'w-[100%]'
              }
            >
              <AddCompetencyAndLevel
                index={ind}
                length={totalData?.length}
                data={data}
                onChange={(data) => handleCompetencyAndLevelsData(data, ind)}
                handleDelete={() => handleDelete(ind)}
                handleAdd={() =>
                  handleAddValue({ name: '', id: '', levels: [] })
                }
              />
            </div>
          );
        })}
        <div className='mt-[60px] flex  justify-end gap-5'>
          <ButtonOutline
            classes='border-[#385B8B] text-[#385B8B] w-[180px]'
            onClick={() => router.push('/my-courses')}
          >
            Cancel
          </ButtonOutline>
          <ButtonFill
            disabled={disabledUpload}
            onClick={handleSubmit}
            classes='bg-[#385B8B] w-[180px] '
          >
            Upload
          </ButtonFill>
        </div>
      </div>
    </div>
  );
};
export default AddNewCourse;
