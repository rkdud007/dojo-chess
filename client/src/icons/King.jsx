// Credits to Noah Jacobs for the chess icons - https://noahjacob.us/
export const King = (props) => {
  return (
    <svg
      width={props.width ? props.width : "40"}
      height={props.height ? props.height : "40"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 2V0H9V2H11V4H9V6H15V9L12.75 12.75L14 14V16H2V14L3.25 12.75L1 9V6H7V4H5V2H7Z"
        fill={props.color ? props.color : "#FFFFFF"}
      />
    </svg>
  );
};
