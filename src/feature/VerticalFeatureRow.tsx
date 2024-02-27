// Import necessary hooks and utilities from Next.js and Tailwind CSS
import className from 'classnames';
import { useRouter } from 'next/router';

// Define the props interface to include optional title, description, image, imageAlt, and a new optional images array
type IVerticalFeatureRowProps = {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  images?: { src: string; alt: string }[]; // New prop for multiple images
  reverse?: boolean;
};

// Define the VerticalFeatureRow functional component
const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const { title, description, image, imageAlt, images, reverse } = props;
  const verticalFeatureClass = className(
    'mt-10',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': reverse,
    },
  );

  const router = useRouter();

  // Function to conditionally render content based on the presence of images prop
  const renderContent = () => {
    if (images && images.length) {
      // Render multiple images if the images prop is provided
      return (
        <div className="flex w-full justify-around p-6">
          {images.map((img, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={`${router.basePath}${img.src}`}
                alt={img.alt}
                style={{ maxWidth: '50%', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      );
    }
    // Render text and a single image if the images prop is not provided
    return (
      <>
        <div className="w-full text-center sm:w-1/2 sm:px-6">
          <h3 className="text-3xl font-semibold text-gray-900">{title}</h3>
          <div className="mt-6 text-xl leading-9">{description}</div>
        </div>
        <div className="flex w-full items-center justify-center p-6 sm:w-1/2">
          <img
            src={`${router.basePath}${image}`}
            alt={imageAlt}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </>
    );
  };

  // Return the component layout
  return <div className={verticalFeatureClass}>{renderContent()}</div>;
};

// Export the VerticalFeatureRow component for use in other parts of your application
export { VerticalFeatureRow };
