import { business } from "@/lib/business";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/icons";

export function InstagramGrid() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-condensed text-sm font-bold uppercase tracking-[0.2em] text-red">Follow Along</p>
          <h2 className="font-display text-4xl tracking-wide text-ink sm:text-5xl">Follow Us on Instagram</h2>
          <p className="max-w-md text-ink-soft">
            New menu drops, behind-the-scenes kitchen shots, and everyday cravings — follow{" "}
            {business.social.instagramHandle} for more.
          </p>
          <Button href={business.social.instagram} external size="lg" className="mt-2">
            <InstagramIcon className="h-5 w-5" />
            Follow {business.social.instagramHandle}
          </Button>
        </div>
      </Container>
    </section>
  );
}
