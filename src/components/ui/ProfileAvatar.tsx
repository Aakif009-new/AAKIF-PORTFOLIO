"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { personalInfo } from "@/lib/data";

const sizeMap = {
  sm: "w-20 h-20 sm:w-24 sm:h-24",
  md: "w-28 h-28 sm:w-32 sm:h-32",
  lg: "w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44",
  hero: "w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48",
} as const;

type ProfileSize = keyof typeof sizeMap;

interface ProfileAvatarProps {
  size?: ProfileSize;
  priority?: boolean;
  className?: string;
  showGlow?: boolean;
}

export function ProfileAvatar({
  size = "lg",
  priority = false,
  className,
  showGlow = true,
}: ProfileAvatarProps) {
  const dim = sizeMap[size];

  return (
    <motion.div
      className={cn("group relative inline-flex shrink-0", className)}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {showGlow && (
        <div
          className={cn(
            "absolute inset-0 rounded-full opacity-60 blur-2xl transition-opacity duration-500",
            "bg-gradient-to-br from-indigo-500/40 via-violet-500/35 to-fuchsia-500/30",
            "group-hover:opacity-90"
          )}
          aria-hidden
        />
      )}

      <div
        className={cn(
          "relative rounded-full p-[3px]",
          "bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500",
          "shadow-lg shadow-indigo-500/25 transition-shadow duration-500",
          "hover:shadow-xl hover:shadow-violet-500/35",
          dim
        )}
      >
        <div className="relative h-full w-full overflow-hidden rounded-full bg-background ring-2 ring-background/80">
          <Image
            src={personalInfo.profileImage}
            alt={`${personalInfo.name} — ${personalInfo.role}`}
            fill
            sizes={
              size === "hero"
                ? "(max-width: 640px) 128px, (max-width: 1024px) 176px, 192px"
                : "(max-width: 768px) 160px, 176px"
            }
            className="object-cover object-center"
            priority={priority}
            quality={92}
          />
        </div>
      </div>
    </motion.div>
  );
}

interface ProfileCardProps {
  className?: string;
  avatarSize?: ProfileSize;
}

export function ProfileCard({ className, avatarSize = "lg" }: ProfileCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center text-center",
        "rounded-2xl glass-card px-6 py-10 sm:px-8 sm:py-12",
        "w-full max-w-sm mx-auto lg:max-w-none lg:mx-0",
        className
      )}
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/15 via-violet-500/10 to-transparent blur-2xl pointer-events-none" aria-hidden />

      <div className="relative flex flex-col items-center gap-5 sm:gap-6 w-full">
        <ProfileAvatar size={avatarSize} showGlow />

        <div className="flex flex-col items-center gap-1.5 sm:gap-2 w-full">
          <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground leading-tight">
            {personalInfo.name}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground font-medium">
            {personalInfo.role}
          </p>
          <p className="text-xs text-muted-foreground/80">{personalInfo.subtitle}</p>
        </div>
      </div>
    </div>
  );
}
