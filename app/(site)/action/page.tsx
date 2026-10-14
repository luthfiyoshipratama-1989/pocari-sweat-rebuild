import { Container } from "@/components/common/Container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getActiveCampaigns } from "@/lib/queries";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Action & Campaign - Pocari Sweat",
  description: "Ikuti kampanye dan aksi positif Pocari Sweat untuk gaya hidup sehat dan aktif.",
};

export default async function ActionPage() {
  const campaigns = await getActiveCampaigns();

  return (
    <div className="bg-white text-ink pt-24 pb-16">
      {/* Hero */}
      <section className="bg-[#0091DA] text-white py-16 mb-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Action & Campaign</h1>
          <p className="text-lg text-sky-100 max-w-2xl">
            Bergerak bersama untuk hidup lebih sehat. Ikuti kampanye dan aksi nyata dari Pocari Sweat.
          </p>
        </Container>
      </section>

      {/* Campaigns Grid */}
      <Container>
        {campaigns && campaigns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaigns.map((campaign: any) => (
              <Card key={campaign._id} className="overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                {/* Campaign Image */}
                <div className="relative w-full h-56 bg-gray-200">
                  {campaign.image ? (
                    <Image
                      src={campaign.image}
                      alt={campaign.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#0091DA]/20 to-[#0091DA]/5 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">No image</span>
                    </div>
                  )}
                </div>

                {/* Campaign Content */}
                <div className="p-6 flex flex-col gap-4">
                  {campaign.period && (
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0091DA] bg-sky-50 px-3 py-1 rounded-full self-start">
                      {campaign.period}
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-ink">{campaign.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">{campaign.description}</p>

                  {campaign.link && (
                    <Link href={campaign.link} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-[#0091DA] hover:bg-[#0091DA]/90 text-white">
                        Ikuti Kampanye
                      </Button>
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-ink mb-2">Belum ada kampanye aktif</h3>
            <p className="text-gray-600">Nantikan aksi dan program menarik dari kami segera.</p>
          </div>
        )}
      </Container>
    </div>
  );
}
