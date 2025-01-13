import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="space-y-6 text-center w-full max-w-6xl">
        <div className="flex flex-col md:flex-row justify-center items-center gap-0 md:gap-4">
          <pre className="font-mono whitespace-pre text-[0.5rem] sm:text-xs md:text-sm lg:text-base">
            {`
███▄▄▄▄    ▄██████▄      ███     
███▀▀▀██▄ ███    ███ ▀█████████▄ 
███   ███ ███    ███    ▀███▀▀██ 
███   ███ ███    ███     ███   ▀ 
███   ███ ███    ███     ███     
███   ███ ███    ███     ███     
███   ███ ███    ███     ███     
 ▀█   █▀   ▀██████▀     ▄████▀   
            `}
          </pre>
          <pre className="font-mono whitespace-pre text-[0.5rem] sm:text-xs md:text-sm lg:text-base">
            {`
    ▄████████  ▄██████▄  ███    █▄  ███▄▄▄▄   ████████▄  
   ███    ███ ███    ███ ███    ███ ███▀▀▀██▄ ███   ▀███ 
   ███    █▀  ███    ███ ███    ███ ███   ███ ███    ███ 
   ███▄▄▄     ███    ███ ███    ███ ███   ███ ███    ███ 
 ▀▀███▀▀▀     ███    ███ ███    ███ ███   ███ ███    ███ 
   ███        ███    ███ ███    ███ ███   ███ ███    ███ 
   ███        ███    ███ ███    ███ ███   ███ ███   ▄███ 
   ███         ▀██████▀  ████████▀   ▀█   █▀  ████████▀  
            `}
          </pre>
        </div>
        <p className="text-gray-400 text-sm sm:text-base">
          oops! seems like this page doesn&apos;t exist...
        </p>
        <Link
          href="/"
          className="inline-block text-gray-400 text-sm sm:text-base underline"
        >
          take me back home
        </Link>
      </div>
    </div>
  );
}
