# Directory expansion — 2026-10-07

Added six new Artist records in `src/broadeningBatch7.ts`. The existing `broadeningRegistry.ts` glob imports this batch into `photoRosterImmediateArtists` and the main directory; no separate unconnected roster was created.

## Primary sources checked

- **Sky Hopinka**: [SFMOMA biography and 2024 screening](https://www.sfmoma.org/event/sky-hopinka-film-screening/); [artist's maɬni project](https://www.skyhopinka.com/mani-towards-the-ocean-towards-the-shore); [Whitney on The Land Describes Itself](https://whitney.org/exhibitions/time-management-techniques/art?section=6); [Whitney Biennial 2017](https://whitney.org/exhibitions/2017-biennial/art?section=22). These support the biography, institutional relationships, fellowship, project dates and techniques.
- **Ayo Akingbade**: [Spike Island exhibition and commission](https://www.spikeisland.org.uk/programme/exhibitions/ayo-akingbade/); [Ben Uri Research Unit biography](https://www.buru.org.uk/contributor/ayo-akingbade-). The museum biography supports the birth year, Dear Babylon and collection relationship; Spike Island supports the paired films and institutional collaboration.
- **Dawit L. Petros**: [Walther Collection biography](https://www.walthercollection.com/en/collection/artists/dawit-l-petros); [artist's The Stranger’s Notebook](https://www.dawitlpetros.com/the-strangers-notebook-201617); [Italian Cultural Institute / Power Plant project](https://iictoronto.esteri.it/en/gli_eventi/calendario/exhibition-spazio-disponibile-by-2/). Journey duration differs across sources; the entry intentionally gives the travel years without an exact month count. The 2020 page has conflicting event headers, so no precise opening/closing dates were copied.
- **Tadáskía**: [MoMA Projects exhibition](https://www.moma.org/calendar/exhibitions/5713). Supports birth year, 2022 book, 2024 exhibition and joint curators. Base is recorded at country level rather than guessing a current city.
- **Batia Suter**: [artist biography](https://www.batiasuter.org/bscv.html); [MBAL biography](https://www.mbal.ch/en/expo/batia-suter/); [Photographers’ Gallery 2018 shortlist exhibition](https://thephotographersgallery.org.uk/whats-on/deutsche-boerse-photography-foundation-prize-2018); [artist's 2018 installation](https://www.batiasuter.org/bs082.html). Shortlist is explicitly distinguished from winning the prize.
- **Feliciano Centurión**: [Americas Society exhibition](https://www.as-coa.org/exhibitions/feliciano-centurion-abrigo); [institutional press release, 2020-01-28](https://www.as-coa.org/articles/americas-society-presents-feliciano-centurion-abrigo). Record distinguishes lifetime textile work from the posthumous 2020 exhibition. Its first project is explicitly a body of work, not an invented individual artwork title.

Each record includes id, name, dates, base, introduction, methods, subjects, outputs, institutions, achievements, attention rationale, two project records and a primary source link. `whyImportant` and project `reading` are editorial interpretations, labelled as such. Images remain an empty array; no unverified image URLs or image rights claims were added.

## Verification

- Loaded actual `src/data.ts` export via Vite SSR before and after: **1,921 → 1,927** artists.
- Checked all six names against the complete baseline using normalized names and ids, including generated roster entries. No duplicates; each new id occurs exactly once in the live export.
- All mandatory scalar fields and tag arrays populated; project fields and primary URLs validated.
- Existing registry integrates the new batch without changes to application code.
- Production build attempted: blocked by a pre-existing unescaped quote in `src/archiveBatch287.ts:15`. Earlier dependency scanning also found existing syntax errors in archiveBatch330a/b/d/e. None of these unrelated archive files were modified. The new directory data imports successfully.
- Dependency installation with `npm ci` was blocked by an existing picomatch lockfile mismatch; `npm install --package-lock=false` was used for validation without changing tracked dependency files.
- Parole and existing artist deep-analysis records were not modified.
