# Directory expansion — broadening batch 8

Six new records were added through `src/broadeningBatch8.ts`. The existing `broadeningRegistry.ts` glob imports numbered broadening batches into the live directory.

## Source audit

- **Sarah Amrani** — [Foam artist profile](https://www.foam.org/artists/sarah-amrani) and [Foam: Terror of Beauty](https://www.foam.org/events/sarah-amrani). Foam supports birth year, Rotterdam base, grant, media, subject and exhibition dates.
- **Jasmijn Vermeeren** — [Foam press release](https://www.foam.org/press/jasmijn-vermeeren-you-don-t-look-sick) and [Foam exhibition](https://www.foam.org/en/events/jasmijn-vermeeren-you-don-t-look-sick). Supports birth year, KABK graduation, collective relationship, methods and project contents.
- **Karim El Maktafi** — [FUTURES project](https://www.futures-photography.com/artist-projects/they-call-us-second-generation), [FUTURES profile](https://www.futures-photography.com/profiles/karim-el-maktafi?project=fantasia), and [PHmuseum profile](https://phmuseum.com/u/karimelmaktafi). Supports Italian–Moroccan background, 1992 birth year, project and professional network. Project dating is deliberately expressed as continuing research rather than a fabricated fixed completion date.
- **Kelani Abass** — [MoMA collection record](https://www.moma.org/collection/works/434635), [MoMA New Photography 2023](https://www.moma.org/calendar/exhibitions/5525), [Wereldmuseum](https://rotterdam.wereldmuseum.nl/en/whats-on/exhibitions/a-world-in-common/meet-the-creator%3A-Kelani%20Abass), and [gallery biography](https://www.rele.co/artists/49-kelani-abass/biography/). Supports material specification, dimensions, exhibition/collection relationships and archive context.
- **Khashayar Javanmardi** — [Foam press release](https://www.foam.org/press/foam-3h-khashayar-javanmardi), [Foam exhibition](https://www.foam.org/events/khashayar-javanmardi), and [Foam studio visit](https://www.foam.org/articles/studio-visit-khashayar-javanmardi). Supports birth/base, decade-long project, media, book, awards and exhibition dates.
- **Citra Sasmita** — [Barbican exhibition](https://www.barbican.org.uk/whats-on/2025/event/citra-sasmita-into-eternal-land) and detailed [Barbican exhibition guide](https://www.barbican.org.uk/exhibition-guides/citra-sasmita-exhibition-guide-1). Supports project dates, Kamasan method, collaborator roles and material list.

Editorial interpretation is explicitly marked `关注理由` or `解读`. No artwork image URLs were added without a separate rights check.

## Verification

- Actual Vite SSR directory baseline before addition: **1,927 artists**.
- All six ids and normalized names were checked against the full runtime export, including generated rosters; none existed.
- Required scalar fields, arrays, project facts and source URLs are populated.
- Vite SSR integration validation passes at **1,927 → 1,933**. Full TypeScript/build verification remains blocked by the pre-existing syntax error in `src/archiveBatch287.ts`; this unrelated archive file was not modified.
- Parole and existing deep-analysis records are untouched.
