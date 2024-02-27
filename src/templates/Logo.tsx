// import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // Apply conditional classes for size. Adjust these classes based on your preference.
  const imageSizeClass = props.xl ? 'w-22 h-22' : 'w-16 h-16'; // Example sizes, adjust as needed
  const textStyleClass = props.xl ? 'text-3xl' : 'text-xl';
  const fontWeightClass = 'font-semibold';

  return (
    <div
      className={`inline-flex items-center text-gray-900 ${fontWeightClass} ${textStyleClass}`}
    >
      <img
        src="/assets/images/logo.png" // Adjust the path as necessary
        alt="Logo"
        className={`mr-1 ${imageSizeClass}`} // Controls the size of the image
      />
    </div>
  );
};

export { Logo };
