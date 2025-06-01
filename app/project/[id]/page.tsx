import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import ClientPage from "./client-page";

// Define specific types for Next.js 15 params
interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all possible project IDs
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  // Await the params
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const projectId = parseInt(id);
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    notFound();
  }

  return <ClientPage project={project} projectId={projectId} />;
} 