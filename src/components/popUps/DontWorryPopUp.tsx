import { DontWorry } from '../../../public/svg';

const DontWorryPopUp = ({
  visible,
  handleVisibility,
}: {
  visible: boolean;
  handleVisibility: (value: boolean) => void;
}) => {
  return (
    <div>
      {visible && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='backdrop-blur-{none} absolute inset-0 bg-black bg-opacity-50'></div>
          <div className='modal-container z-50 mx-auto h-[355px] w-[550px] overflow-y-auto rounded-3xl bg-white shadow-lg '>
            <div className='modal-content flex flex-col justify-between py-4 pt-[44px] text-left'>
              <div className='flex justify-center'>
                <DontWorry width='60' height='60' />
              </div>
              <div className='h-full'>
                <p className=' leading-24 mb-4  text-center text-[24px] font-semibold text-black'>
                  Don’t worry
                </p>
                <p className='font-outfit leading-24 px-8 py-4 text-center text-[16px] font-normal text-gray-700 '>
                  Course can be added only after admin approval, Your account is
                  under verification process. We will inform you once it
                  verified.
                </p>
              </div>
              <div
                className='gap- flex justify-center py-4'
                onClick={() => handleVisibility(false)}
              >
                <button className='rounded-4 flex w-[145px] items-center  justify-center  gap-1 rounded-md border border-solid border-gray-700 bg-[#26292D] px-[16px] py-[4px]'>
                  <span className='font-outfit leading-24 text-center font-semibold text-[px] text-white'>
                    OK
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DontWorryPopUp;
