import { Container } from "@/components/common/Container";
import { HydrationCalculator } from "@/components/blocks/HydrationCalculator";

export const metadata = {
  title: "Kalkulator Hidrasi",
  description: "Hitung kebutuhan cairan harianmu berdasarkan berat badan, aktivitas, dan cuaca.",
};

export default function HydrationCalculatorPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-marine-text font-medium mb-3">Fitur Interaktif</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Kalkulator Hidrasi
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Hitung kebutuhan cairan harianmu berdasarkan berat badan, level aktivitas, dan cuaca.
            </p>
          </div>
          <HydrationCalculator />
        </div>
      </Container>
    </section>
  );
}