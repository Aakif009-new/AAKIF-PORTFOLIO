import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex-center flex-col gap-6 px-4">
      <div className="text-8xl sm:text-9xl font-bold text-gradient">404</div>
      <h1 className="text-2xl sm:text-3xl font-bold text-center">Page Not Found</h1>
      <p className="text-muted-foreground text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </div>
  );
}
