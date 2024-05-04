/** @format */

interface IButton {
  label: string;
  variant: "primary" | "secondary" | "default";
  size?: "sm" | "md";
}

const Button = ({ label, variant = "default", size = "md" }: IButton) => {
  const BTN_VARIANT = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-black",
    default: "bg-[#f2f2f2] text-dark-gray",
  };

  const BTN_SIZE = {
    sm: "px-4 py-2.5 text-[12px]",
    md: "px-10 py-4 text-sm min-w-[191px]",
  };

  return (
    <button
      className={`${BTN_VARIANT[variant]} rounded-lg ${BTN_SIZE[size]} font-medium`}
    >
      {label}
    </button>
  );
};

export default Button;
