import { userType } from '../../../src/app/my-account/page';

const UserDetails = ({ user }: { user: userType }) => {
  return (
    <div className='flex gap-[100px] pt-6 text-[#272728]'>
      {/* left */}
      <div className='flex-1'>
        <p className='pb-2 text-[18px]  font-semibold leading-6'>
          General Details
        </p>
        <div className='h-[1px] bg-[#B3B3B3]'></div>
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>
            Name of Moderator
          </p>
          <p className='text-[16px] '>{user?.name}</p>
        </div>
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>Email Id</p>
          <p className='text-[16px] '>{user?.email}</p>
        </div>
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>Phone Number</p>
          <p className='text-[16px] '>{user?.phone}</p>
        </div>
      </div>
      {/* center */}
      <div className='flex-1'>
        <p className='pb-2 text-[18px]  font-semibold leading-6'>
          Banking Details
        </p>
        <div className='h-[1px] bg-[#B3B3B3]'></div>{' '}
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>Bank Name</p>
          <p className='text-[16px] '>{user?.paymentInfo?.bankName}</p>
        </div>
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>Branch Name</p>
          <p className='text-[16px] '>{user?.paymentInfo?.branchName}</p>
        </div>
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>
            Account Number
          </p>
          <p className='text-[16px] '>{user?.paymentInfo?.accNo}</p>
        </div>
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>IFSC Code</p>
          <p className='text-[16px] '>{user?.paymentInfo?.IFSC}</p>
        </div>
      </div>
      {/* end */}
      <div className='flex-1'>
        <p className='pb-2 text-[18px]  font-semibold leading-6'>Others</p>
        <div className='h-[1px] bg-[#B3B3B3]'></div>{' '}
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>PAN Number</p>
          <p className='text-[16px] '>{user.paymentInfo.PANnumber}</p>
        </div>
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>GST Number</p>
          <p className='text-[16px] '>{user.paymentInfo.GSTnumber}</p>
        </div>
      </div>
    </div>
  );
};
export default UserDetails;
