import { outfit } from '../FontFamily';

const Label = ({ heading, htmlFor }: { heading: string; htmlFor: string }) => {
  return (
    <label
      htmlFor={`${htmlFor}`}
      className={`${outfit.className} block py-1 text-[14px]  font-medium  text-[#6F747E]`}
    >
      {heading}
    </label>
  );
};
export default Label;
