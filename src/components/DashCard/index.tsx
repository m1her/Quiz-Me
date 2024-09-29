import React from "react";

export const DashCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-fit p-4 bg-zinc-50/10 rounded-lg border-2 border-zinc-100/70 shadow-[0_0_10px_3px_rgba(225,225,225,0.3)]">
      {children}
    </div>
  );
};
