import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="slide-container">
      <div className="slide-content text-center">
        <h1 className="magazine-title mb-8">404</h1>
        <div className="vintage-border p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="text-lg mb-8">
            The project you're looking for doesn't exist in this issue.
          </p>
          <Link href="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 