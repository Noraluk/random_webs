export default function Card({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <path d="M17,4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V20a2,2,0,0,0,2,2H15a2,2,0,0,0,2-2ZM5.5,7a1,1,0,1,1,1-1A1,1,0,0,1,5.5,7Zm4,7c-1,1-3,2-3-1s3-4,3-4,3,1,3,4S10.5,15,9.5,14Zm4,5a1,1,0,1,1,1-1A1,1,0,0,1,13.5,19Z" />
      <path d="M20,3H19V20a2,2,0,0,1-2,2h3a2,2,0,0,0,2-2V5A2,2,0,0,0,20,3Z" />
    </svg>
  );
}
