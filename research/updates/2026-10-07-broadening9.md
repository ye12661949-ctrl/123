# Directory expansion — broadening batch 9

Six Aperture-linked contemporary photographers were added through `src/broadeningBatch9.ts`. The existing broadening registry automatically imports this numbered batch into the live directory.

## Source audit

- **Alana Perino** — [Aperture exhibition](https://aperture.org/exhibitions/alana-perino-pictures-of-birds-2025-aperture-portfolio-prize-winner/) and [Aperture editorial](https://aperture.org/editorial/alana-perino-crafts-a-haunting-story-of-family-and-memory). Supports birth year/base, project span, family-care context, award and exhibition dates.
- **Sara Abbaspour** — [Aperture editorial](https://aperture.org/editorial/a-shimmering-portrait-of-contemporary-iran/), [artist biography](https://www.saraabbaspour.com/about), and [UNM profile](https://art.unm.edu/profile/sara-abbaspour). Supports Iran/US practice, methods, education and project dates. No reliable birth year was found, so the record explicitly marks it undisclosed.
- **Emma Ressel** — [Aperture editorial](https://aperture.org/editorial/a-transfixing-look-at-nature-at-its-most-unnatural/), [artist biography](https://www.emmaressel.com/about), and [Houston Center for Photography](https://www.edu.hcponline.org/emma-ressel-1). Supports large-format/re-photography/archive methods, New Mexico base and project construction. Birth year is explicitly marked undisclosed.
- **Daria Svertilova** — [Aperture editorial](https://aperture.org/editorial/how-the-war-in-ukraine-altered-life-for-a-lost-generation/), [Fotomuseum Winterthur](https://www.fotomuseum.ch/en/photographer-post/daria-svertilova/), and [MOKSOP](https://moksop.org/en/art/artists/dar-ia-svertilova/). Supports 1996 birth year, education, project method, shortlist and collection relationship.
- **Avion Pearce** — [Aperture winner press release](https://aperture.org/press-release/artist-avion-pearce-awarded-the-2024-aperture-portfolio-prize/) and [Aperture editorial](https://aperture.org/editorial/avion-pearce-creates-a-world-between-reality-and-dreams/). Supports Brooklyn/Guyanese background, cameras, project dates, community context and award. Birth year is not asserted without a reliable source.
- **River Claure** — [Aperture editorial](https://aperture.org/editorial/a-playful-investigation-of-community-and-territory-in-bolivia/) and [Aperture twenty-year retrospective](https://aperture.org/editorial/looking-back-at-twenty-years-of-the-aperture-portfolio-prize/). Supports Cochabamba base, MITA locations/methods, family history, institutional relationships and grants. Birth year is not asserted without a reliable source.

Editorial interpretation is marked as `关注理由` or `解读`. No artwork image URL was copied without an explicit reuse-rights check.

## Verification

- Full live directory baseline: **1,933 artists**.
- All six ids and normalized names were checked against the runtime export, including generated lists; none existed.
- Required scalar fields, classifications, institution/achievement arrays, project facts and source links are populated.
- Vite SSR integration validation passes at **1,933 → 1,939**. Full TypeScript verification remains blocked by the pre-existing syntax error in `src/archiveBatch287.ts`; this unrelated file was not modified.
- Parole and existing deep-analysis files were not modified.
