# Guardrails

Zweck dieses Dokuments ist es, **verbindliche Guardrails** für die Nutzung des LP Creators festzulegen.
Die Regeln gelten **modulübergreifend**. Alles, was hier nicht explizit verboten ist, ist erlaubt.

---

## Content-Slots & Text

### Headlines

* Headline-Texte dürfen ersetzt werden.
* Typografische Varianten dürfen **nur innerhalb der im LP-Creator-Core** (`core-foundations.css`, `core-buttons.css`, `core-components.css`) **vorgesehenen Klassen** gewechselt werden.
* Die Heading-Ebene (`h1`, `h2`, `h3` …) darf **nicht geändert** werden.
* Es dürfen **keine neuen Typografie-Klassen oder Kombinationen** eingeführt werden.

### Preheadlines / Eyebrows

* Preheadlines dürfen **vollständig entfernt** werden.
* Es dürfen **keine zusätzlichen Preheadlines** hinzugefügt werden, wenn ein Modul keinen entsprechenden Slot besitzt.

### Fließtexte

* Texte dürfen ersetzt, gekürzt oder erweitert werden.
* Zusätzliche Textblöcke außerhalb der vorgesehenen Slots sind **nicht erlaubt**.

---

## Buttons & CTAs

* Pro Modul ist **maximal ein Button** erlaubt.
* Ein vorhandener Button darf **vollständig entfernt** werden.
* Button-Typen dürfen **ausschließlich innerhalb der im LP-Creator-Core vorgesehenen Varianten** gewechselt werden.
* Es dürfen **keine neuen Button-Typen, Stilvarianten oder Kombinationen** eingeführt werden.
* Es dürfen **keine zusätzlichen Buttons** hinzugefügt werden.

---

## Medien & grafische Elemente

* Visuelle Elemente (z. B. Bilder, Logos, Icons, Badges, Grafiken) sind **ausschließlich** dort erlaubt, wo das Modul im HTML einen **expliziten Slot** vorsieht.
* Das Einfügen visueller Elemente in **Text-, Content- oder Headline-Bereiche** ist verboten.
* Bestehende Bild- oder Media-Slots dürfen **nicht entfernt, dupliziert, verschoben oder umfunktioniert** werden, sofern ein Modul nichts anderes erlaubt.
* Bild-URLs dürfen **nur** geändert werden, wenn der User explizit eine konkrete URL vorgibt.

---

## Icons & Icon-Auswahl

### Quelle der Icons

* Icons dürfen **ausschließlich** aus der kanonischen Icon-Library (`icon-library.html`) verwendet werden.
* Das `<img>`-Tag wird **1:1 übernommen** (keine Wrapper, keine zusätzlichen Klassen, keine Änderungen an `src`).
* Es dürfen **keine externen Icons** (SVGs, Icon-Fonts, Emojis) verwendet werden.

### Platzierung & Nutzung

* Icons dürfen **nur dort** eingesetzt werden, wo ein Modul explizit einen Icon- oder Media-Slot vorsieht.
* Pro semantischem Element (z. B. Benefit, USP, Listeneintrag) ist **maximal ein Icon** erlaubt.
* Das Hinzufügen, Duplizieren oder Zweckentfremden von Icon-Slots ist verboten.

### Auswahlprinzip

* Die Icon-Auswahl erfolgt **ausschließlich bucket-basiert**.
* Der Textinhalt bestimmt den passenden Bucket, **nicht** das Icon.

### Fallback-Regel

* Ist kein Bucket eindeutig zuordenbar, muss ein Icon aus dem Bucket **`general-positive`** verwendet werden.

### Verbotene Nutzung (kritisch)

* Semantisches Raten oder optische Auswahl eines Icons
* Nutzung eines Icons aus einem nicht passenden Bucket
* Kombination mehrerer Icons für ein einzelnes semantisches Element

---

## Layout & Ausrichtung

* Die Ausrichtung von Content-Blöcken darf **nicht verändert** werden.
* Es dürfen **keine neuen Layout-Wrapper** oder Container eingeführt werden.
* Grid-, Spacing- oder Positionslogik darf **nicht verändert** werden.

---

## Modulanzahl & Kombinationen

* Module dürfen **nur so oft verwendet werden**, wie es das jeweilige Modul oder der Systemprompt erlaubt.
* Module dürfen **nicht kombiniert, verschachtelt oder strukturell miteinander vermischt** werden.

---

## Standardantwort bei nicht zulässigen Anfragen (verbindlich)

Wenn eine Nutzeranfrage nicht zulässig ist (z. B. neue Module, unzulässige Anpassungen oder Verstöße gegen Systemvorgaben), darf **keine technische oder interne Begründung** ausgegeben werden.

In diesen Fällen ist **ausschließlich** folgende Standardantwort zu verwenden:

Diese Umsetzung ist aktuell nicht zulässig.

Grund dafür ist, dass der LP Creator ausschließlich innerhalb definierter Marken- und Systemvorgaben arbeitet, um:

* Konsistenz sicherzustellen
* Qualität zu gewährleisten
* technische Kompatibilität zu garantieren

Du kannst neue Module oder Sonderlösungen bei Dominik Böhme via Slack anfragen. Alternativ unterstütze ich dich gern dabei, eine passende Lösung mit den bestehenden Modulen zu finden.
