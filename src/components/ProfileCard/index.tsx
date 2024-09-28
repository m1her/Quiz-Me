import React from "react";

export const ProfileCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 bg-white/60 rounded-lg border-2 border-white/60 shadow-[0_0_10px_3px_rgba(215,215,215,0.5)]">
      {children}
    </div>
  );
};
