import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/80 bg-white py-8 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-500">
      <p>
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
