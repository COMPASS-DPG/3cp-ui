const InputSection = ({
  labelName,
  type,
  name,
  value,
  handleInputChange,
  isDisable,
}: {
  labelName: string;
  type: string;
  name: string;
  value: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisable?: boolean;
}) => {
  return (
    <div className=' flex flex-1 flex-col'>
      <label htmlFor='' className='mb-2 text-[14px] font-medium text-[#6F747E]'>
        {labelName}
      </label>
      <input
        type={`${type}`}
        name={`${name}`}
        value={value}
        onChange={(e) => handleInputChange(e)}
        className={`${isDisable ? 'bg-[#E4E4E4]' : 'bg-[#fff]'} rounded-lg`}
        disabled={isDisable}
      />
    </div>
  );
};
export default InputSection;
