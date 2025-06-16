'use client';
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { HomePage } from "@/views/HomePage";
import { ServiceDetailPage } from "@/views/ServiceDetailPage";
import { usePathname } from "next/navigation";

const App: React.FC = () => {

  return <HomePage/>
};

export default App;