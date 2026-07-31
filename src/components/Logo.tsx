interface LogoProps {
  variant?: 'primary' | 'white' | 'icon';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LOGO_SRC = '/euro-spa-logo.png';
const LOGO_WHITE_SRC = '/euro-spa-logo-white.png';

export default function Logo({ variant = 'primary', className = '', size = 'md' }: LogoProps) {
  const heights = { sm: 52, md: 68, lg: 92 };
  const h = heights[size];
  const src = variant === 'white' ? LOGO_WHITE_SRC : LOGO_SRC;

  return (
    <img
      src={src}
      alt="Euro Spa Center"
      style={{
        height: h,
        width: 'auto',
        display: 'block',
      }}
      className={`object-contain ${className}`}
      draggable={false}
    />
  );
}
