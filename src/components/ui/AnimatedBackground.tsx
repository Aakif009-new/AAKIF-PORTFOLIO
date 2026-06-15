/** Pure CSS background — no canvas, no JS, minimal GPU cost */
export function AnimatedBackground() {
  return (
    <div className="live-bg" aria-hidden="true">
      <div className="live-bg__base" />
      <div className="live-bg__aurora live-bg__aurora--1" />
      <div className="live-bg__aurora live-bg__aurora--2" />
      <div className="live-bg__aurora live-bg__aurora--3" />
      <div className="live-bg__grid bg-grid" />
      <div className="live-bg__vignette" />
    </div>
  );
}
