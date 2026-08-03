import { business } from "@/lib/business";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ClockIcon, MapPinIcon, PhoneIcon } from "@/components/icons";

export function LocationHours() {
  return (
    <section className="bg-cream-dark py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-condensed text-sm font-bold uppercase tracking-[0.2em] text-red">Visit Us</p>
            <h2 className="mt-2 font-display text-4xl tracking-wide text-ink sm:text-5xl">
              Find Us in Ann Arbor
            </h2>

            <dl className="mt-8 space-y-6">
              <div className="flex gap-3">
                <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-red" />
                <div>
                  <dt className="font-condensed text-sm font-bold uppercase tracking-wide text-ink">Address</dt>
                  <dd className="text-ink-soft">{business.address.full}</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <PhoneIcon className="mt-1 h-5 w-5 shrink-0 text-red" />
                <div>
                  <dt className="font-condensed text-sm font-bold uppercase tracking-wide text-ink">Phone</dt>
                  <dd>
                    <a href={business.phoneHref} className="text-ink-soft hover:text-red">
                      {business.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <ClockIcon className="mt-1 h-5 w-5 shrink-0 text-red" />
                <div>
                  <dt className="font-condensed text-sm font-bold uppercase tracking-wide text-ink">Hours</dt>
                  <dd className="space-y-0.5 text-ink-soft">
                    {business.hoursSummary.map((h) => (
                      <div key={h.label} className="flex gap-2">
                        <span className="font-medium text-ink">{h.label}:</span>
                        <span>{h.value}</span>
                      </div>
                    ))}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={business.links.order} external size="lg">
                Order Now
              </Button>
              <Button href={business.links.directions} external variant="outline" size="lg">
                Get Directions
              </Button>
            </div>
          </div>

          <div className="aspect-[4/3] w-full overflow-hidden border-2 border-ink">
            <iframe
              title="Map to Moe'z Famous Cheesesteaks"
              src="https://www.google.com/maps?q=Moe%27z+Famous+Cheesesteaks+%26+Burgers+3891+Platt+Road+Ann+Arbor+MI+48108&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
