export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <span className="font-display text-sm tracking-widest text-muted uppercase">
        Preloader
      </span>
    </div>
  );
}
