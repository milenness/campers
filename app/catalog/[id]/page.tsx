import { fetchCamperById } from "@/services/api";
import DetailPage from "@/components/DetailPage";

interface PageProps {
  params: Promise<{ id: string }>;
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