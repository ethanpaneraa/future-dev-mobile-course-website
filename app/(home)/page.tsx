import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">
        FutureDev Mobile App Course Website
      </h1>
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
    </main>
  );
}
