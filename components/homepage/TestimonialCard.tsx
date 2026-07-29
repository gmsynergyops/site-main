"use client";
import { cn } from '@/lib/utils';
import { TestimonialCardProps } from '@/types';
import { useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

const TestimonialCard = ({ imgSrc, description, titleText, titleNumber }: TestimonialCardProps) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 w-full rounded-xl bg-[#F0FAFF] shadow-md border-none transition-all max-w-[400px] min-h-max h-full
      "
    >
      {/* Icon */}
      <div className="w-full sm:w-[30%] flex justify-center sm:justify-start">
        <div className="flex items-center justify-center size-14 lg:size-28 bg-white rounded-lg">
          <span className={cn('text-3xl lg:text-6xl transition-transform duration-300', isCardHovered && "scale-125")}>
            {imgSrc}
          </span>
        </div>
      </div>

      {/* Content */}
      <CardHeader className="w-full sm:w-[70%] p-0">
        <CardTitle className="text-lg sm:text-xl font-semibold text-[#005670] flex items-center gap-2 flex-col  lg:flex-row">
          <span className="text-lg  font-bold text-[#007b9c]">{titleNumber}</span>{' '}
          <span className="text-xs sm:text-sm font-medium text-[#005670]">{titleText}</span>
        </CardTitle>
        <CardDescription className="text-sm sm:text-sm text-gray-700 mt-2 leading-snug pb-5">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default TestimonialCard;
