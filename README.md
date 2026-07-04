# Cypress automaattestid – e-Residency veebileht

## Projekti kirjeldus

See projekt sisaldab Cypressiga loodud automaatteste e-Residency veebilehe
(`https://www.e-resident.gov.ee/`) funktsionaalsuse kontrollimiseks.

**Testjuhtum:** "Why e-Residency?" rippmenüü avamine ja navigeerimine
alammenüü lingi kaudu.

## Kasutatud tehnoloogiad

- [Cypress](https://www.cypress.io/)
- JavaScript
- Node.js

## Projekti struktuur

```text
cypress/
 ├── e2e/
 │    └── why-e-residency.cy.js
 ├── fixtures/
 ├── support/
cypress.config.js
package.json
README.md
```

## Projekti käivitamine

### 1. Klooni projekt

```
git clone <projekti_URL>
```

### 2. Paigalda sõltuvused

```
npm install
```

### 3. Käivita Cypress

**Visual stuudios:**

```
npx cypress open
```

**Terminalist:**

```
npx cypress run
```

## Testi kirjeldus

Automaattest kontrollib järgmisi samme:

1. Avatakse e-Residency avaleht.
2. Nõustutakse küpsiste kasutamisega.
3. Leitakse päises menüü "Why e-Residency?".
4. Kontrollitakse, et menüü on algselt suletud.
5. Avatakse rippmenüü.
6. Kontrollitakse, et menüü avanes edukalt.
7. Klõpsatakse alammenüü lingil "Ease of doing business".
8. Kontrollitakse, et kasutaja suunatakse õigele lehele.

## Märkused

- Test ignoreerib teadaolevat Reacti hüdratsiooniviga #418, kuna see ei ole
  seotud testitava funktsionaalsusega.
- Enne testi alustamist suletakse küpsiste bänner, et see ei mõjutaks testi
  täitmist.
- Test on kirjutatud nii, et seda saab kasutada regressioonitestimise osana.

## Autor

Tatjana Kruberg
