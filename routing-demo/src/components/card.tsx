import { PropsWithChildren } from "react";

function Card({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center items-center p-24 m-2 shadow-lg border border-zinc-400">
      {children}
    </div>
  );
}

export default Card;
