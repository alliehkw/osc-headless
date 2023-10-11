function BackArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="back-arrow-svg"
    >
      <g clipPath="url(#clip0_104_1246)">
        <path
          d="M5 12H19"
          className="back-arrow-path"
          // stroke="#112E3D"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 12L11 18"
          className="back-arrow-path"
          // stroke="#112E3D"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 12L11 6"
          // stroke="#112E3D"
          className="back-arrow-path"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_104_1246">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default BackArrow;
