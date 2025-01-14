import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full px-4 py-8 flex flex-col items-center">
        <Image
          src="/futuredev_logo.png"
          alt="FutureDev Logo"
          width={300}
          height={300}
          className="rounded-lg mb-4"
        />
        <h1 className="mb-4 text-3xl font-bold">
          FutureDev Mobile App Course Website
        </h1>
        <p className="text-lg text-fd-muted-foreground mb-8 text-center">
          Welcome to the FutureDev Mobile App Course website! This website is
          designed to help you access course content, assignments, and other
          resources. If you have any questions, feel free to reach out to Ethan
          at ethanpinedaa2025@u.northwestern.edu
        </p>
        <p className="text-fd-muted-foreground">
          You can open{" "}
          <Link
            href="/content"
            className="text-fd-foreground font-semibold underline"
          >
            /content
          </Link>{" "}
          to see the course content.
        </p>
      </div>
    </main>
  );
}
