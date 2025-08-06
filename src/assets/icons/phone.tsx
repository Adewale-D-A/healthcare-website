export default function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      fill="currentColor"
      className={className || "size-6"}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.73096 10.0954C13.72 14.0834 14.625 9.46976 17.1649 12.0079C19.6135 14.4558 21.0208 14.9463 17.9185 18.0478C17.5299 18.3601 15.0608 22.1173 6.38382 13.4427C-2.29426 4.76705 1.4608 2.29549 1.77319 1.907C4.88309 -1.20311 5.36508 0.21243 7.81371 2.66038C10.3536 5.19954 5.74188 6.10746 9.73096 10.0954Z"
        fill="#007CD7"
      />
    </svg>
  );
}
