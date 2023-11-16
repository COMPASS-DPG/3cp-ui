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
            Name of moderator
          </p>
          <p className='text-[16px] '>{user.name}</p>
        </div>
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>Email Id</p>
          <p className='text-[16px] '>{user.email}</p>
        </div>
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>Phone</p>
          <p className='text-[16px] '>{user.Phone}</p>
        </div>
      </div>
      {/* center */}
      <div className='flex-1'>
        <p className='pb-2 text-[18px]  font-semibold leading-6'>
          Banking Details
        </p>
        <div className='h-[1px] bg-[#B3B3B3]'></div>{' '}
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>Bank</p>
          <p className='text-[16px] '>{user.bank}</p>
        </div>
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>Branch</p>
          <p className='text-[16px] '>{user.branch}</p>
        </div>
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>
            Account Number
          </p>
          <p className='text-[16px] '>{user.accountNumber}</p>
        </div>
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>IFSC Code</p>
          <p className='text-[16px] '>{user.branch}</p>
        </div>
      </div>
      {/* end */}
      <div className='flex-1'>
        <p className='pb-2 text-[18px]  font-semibold leading-6'>Others</p>
        <div className='h-[1px] bg-[#B3B3B3]'></div>{' '}
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>PAN Number</p>
          <p className='text-[16px] '>AVDG5161121P</p>
        </div>
        <div className=' my-4 flex flex-col gap-1'>
          <p className='text-[14px] font-medium text-[#6F747E]'>GST Number</p>
          <p className='text-[16px] '>5615495226559</p>
        </div>
      </div>
    </div>
  );
};
export default UserDetails;
