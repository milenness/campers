import { fetchCamperById } from "@/services/api";
import DetailPage from "@/components/DetailPage";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  try {
    const { id } = await params;
    const camper = await fetchCamperById(id);
    return {
      title: camper.name,
      description: camper.description,
    };
  } catch {
    return {
      title: "Camper Details",
    };
  }
}

export default async function CamperPage({ params }: PageProps) {
  const { id } = await params;

  const camper = await fetchCamperById(id);

  return (
    <main>
      <DetailPage camper={camper} />
    </main>
  );
}
