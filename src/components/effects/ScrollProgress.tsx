export default function ScrollProgress() {
  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 z-50 h-0.5 w-full bg-accent/20"
    >
      <span className="sr-only">ScrollProgress</span>
    </div>
  );
}
