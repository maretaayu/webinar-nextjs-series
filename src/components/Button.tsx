type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  size?: "sm" | "lg";
};

function Button({
  label,
  onClick,
  variant = "primary",
  className,
  size = "sm",
}: ButtonProps) {
  const baseStyle = "rounded-full w-fit font-bold";

  const variantStyle = {
    primary: "bg-black text-white",
    secondary: "bg-gray-200 text-gray-800",
  };

  const sizeStyle = {
    sm: "py-2 px-4 text-sm",
    lg: "py-4 px-8 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle[variant]} ${sizeStyle[size]} ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
