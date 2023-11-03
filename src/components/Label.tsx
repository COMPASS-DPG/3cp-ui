import React from 'react';

import { outfit } from '@/components/FontFamily';

type PropType = {
  text: string;
};

const Label = ({ text }: PropType) => {
  return (
    <label
      className={`mb-2 block text-sm font-medium text-[#6F747E] ${outfit.className}`}
    >
      {text}
    </label>
  );
};

export default Label;
