import { Container } from "@/components/ui/Container";
import { StarIcon } from "@/components/icons";
import { googleReviews, googleReviewSummary } from "@/lib/reviews";

function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className ?? ""}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={`h-4 w-4 ${i < rating ? "text-red" : "text-ink/15"}`} />
      ))}
    </div>
  );
}

export function GoogleReviews() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-10 flex flex-col items-center gap-3 text-center sm:mb-12">
          <p className="font-condensed text-sm font-bold uppercase tracking-[0.2em] text-red">Word on the Street</p>
          <h2 className="font-display text-4xl tracking-wide text-ink sm:text-5xl">What Ann Arbor Is Saying</h2>
          <div className="mt-1 flex items-center gap-2">
            <Stars rating={5} className="h-5 w-5 gap-1" />
            <span className="flex items-center gap-1 font-condensed text-lg font-bold text-ink">
              {googleReviewSummary.rating}
              <StarIcon className="h-4 w-4 text-red" aria-hidden="true" />
            </span>
            <span className="text-sm text-ink-soft">
              ({googleReviewSummary.count.toLocaleString()} Google reviews)
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {googleReviews.map((review) => (
            <figure key={review.author} className="flex flex-col border-2 border-ink bg-white p-6">
              <Stars rating={review.rating} />
              <blockquote className="mt-3 flex-1 text-sm text-ink-soft">&ldquo;{review.text}&rdquo;</blockquote>
              <figcaption className="mt-4 border-t border-ink/10 pt-3">
                <span className="block font-condensed text-sm font-bold uppercase tracking-wide text-ink">
                  {review.author}
                </span>
                <span className="block text-xs text-ink-soft/80">
                  {review.meta} · {review.timeAgo}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={googleReviewSummary.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-condensed text-base font-bold uppercase tracking-wide text-red hover:text-red-dark"
          >
            Read all {googleReviewSummary.count.toLocaleString()} reviews on Google →
          </a>
        </div>
      </Container>
    </section>
  );
}
