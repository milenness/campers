import Reviews from "@/components/Reviews";
import CamperDetail from "@/components/CamperDetail";
import { Camper } from "@/types/camper";

interface DetailPageProps {
  camper: Camper;
}

export default function DetailPage({ camper }: DetailPageProps) {
  return (
    <>
      <CamperDetail camper={camper} />
      <Reviews />
    </>
  );
}
