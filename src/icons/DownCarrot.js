function DownCarrot({ className, id, rotate }) {
  const style = {
    transform: `rotate(${rotate}deg)`,
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 16"
      fill="none"
      className={className}
      id={id}
      style={style}
    >
      <g clipPath="url(#clip0_742_100)">
        <path
          d="M4.16699 6L8.16699 10L12.167 6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_742_100">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(0.166992)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default DownCarrot;
