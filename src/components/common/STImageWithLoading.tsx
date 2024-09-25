import React, { useState } from 'react';

type ImageWithSkeletonProps = {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
};

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  className,
  skeletonClassName = 'bg-gray-300',
}) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative">
      {loading && (
        <div
          className={`absolute inset-0 flex justify-center items-center ${skeletonClassName}`}
        >
          {/* Skeleton placeholder */}
          <div className="w-full h-full animate-pulse"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 ease-in-out`}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageWithSkeleton;
