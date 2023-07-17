// Credits to Noah Jacobs for the chess icons - https://noahjacob.us/
export const Queen = (props) => {
  return (
    <svg
      width={props.width ? props.width : "40"}
      height={props.height ? props.height : "40"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 4C9.10457 4 10 3.10457 10 2C10 0.895431 9.10457 0 8 0C6.89543 0 6 0.895431 6 2C6 3.10457 6.89543 4 8 4Z"
        fill="#F7F0EA"
      />
      <path
        d="M1 9V7L3 5L5.5 7L8 5L10.5 7L13 5L15 7V9L12.75 12.75L14 14V16H2V14L3.25 12.75L1 9Z"
        fill={props.color ? props.color : "#FFFFFF"}
      />
    </svg>
  );
};
