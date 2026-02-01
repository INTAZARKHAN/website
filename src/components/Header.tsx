import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/khan.jpg"
            alt="Intazar Khan"
            width={48}
            height={48}
            className="rounded-full"
            priority
          />
          <span className="font-bold text-lg">Intazar Khan</span>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
