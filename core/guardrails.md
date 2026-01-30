# Guardrails

Zweck dieses Dokuments ist es, **verbindliche Guardrails** für die Nutzung des LP Creators festzulegen.
Die Regeln gelten **modulübergreifend**. Alles, was hier nicht explizit verboten ist, ist erlaubt.

---

## Grundprinzip

- Es dürfen ausschließlich Module aus `core-components.html` verwendet werden.
- HTML-Struktur, Klassen, Attribute, Wrapper und Reihenfolge sind **unveränderlich**.
- Es dürfen **keine neuen Module** erstellt und **keine bestehenden Module** umgebaut, kombiniert oder abgeleitet werden.
- **Alles ist erlaubt, was nicht explizit als verboten definiert ist.**

---

## Content-Slots & Text

### Headlines
- Headline-Texte dürfen ersetzt werden.
- Typografische Varianten dürfen **nur innerhalb der im LP-Creator-Core** (`core-foundations.css`, `core-buttons.css`, `core-components.css`) **vorgesehenen Klassen** gewechselt werden.
- Die Heading-Ebene (`h1`, `h2`, `h3` …) darf **nicht geändert** werden.
- Es dürfen **keine neuen Typografie-Klassen oder Kombinationen** eingeführt werden.

### Preheadlines / Eyebrows
- Preheadlines dürfen **vollständig entfernt** werden.
- Es dürfen **keine zusätzlichen Preheadlines** hinzugefügt werden, wenn ein Modul keinen entsprechenden Slot besitzt.

### Fließtexte
- Texte dürfen ersetzt, gekürzt oder erweitert werden.
- Zusätzliche Textblöcke außerhalb der vorgesehenen Slots sind **nicht erlaubt**.

---

## Buttons & CTAs

- Pro Modul ist **maximal ein Button** erlaubt.
- Ein vorhandener Button darf **vollständig entfernt** werden.
- Button-Typen dürfen **ausschließlich innerhalb der im LP-Creator-Core vorgesehenen Varianten** gewechselt werden.
- Es dürfen **keine neuen Button-Typen, Stilvarianten oder Kombinationen** eingeführt werden.
- Es dürfen **keine zusätzlichen Buttons** hinzugefügt werden.

---

## Medien & grafische Elemente

- Es dürfen **keine zusätzlichen visuellen Elemente** (z. B. Bilder, Logos, Icons, Badges, Grafiken) in Modulen eingefügt werden.
- Visuelle Elemente sind **ausschließlich** dort erlaubt, wo das Modul im HTML bereits einen **expliziten Slot** vorsieht.
- Das Einfügen visueller Elemente in **Text-, Content- oder Headline-Bereiche** ist verboten.
- Bestehende Bild- oder Media-Slots dürfen **nicht entfernt, dupliziert, verschoben oder umfunktioniert** werden, sofern ein Modul nichts anderes erlaubt.
- Bild-URLs dürfen **nur** geändert werden, wenn der User explizit eine konkrete URL vorgibt.

---

## Layout & Ausrichtung

- Die Ausrichtung von Content-Blöcken darf **nicht verändert** werden.
- Ausrichtung umfasst sowohl **Layout-** als auch **Textausrichtung**.
- Es dürfen **keine neuen Layout-Wrapper** oder Container eingeführt werden.
- Grid-, Spacing- oder Positionslogik darf **nicht verändert** werden.

---

## Modulanzahl & Kombinationen

- Module dürfen **nur so oft verwendet werden**, wie es das jeweilige Modul oder der Systemprompt erlaubt.
- **Wenn weder Modul noch Systemprompt eine Mehrfachverwendung erlauben, ist sie verboten.**
- Module dürfen **nicht kombiniert, verschachtelt oder strukturell miteinander vermischt** werden.

---

## Ausnahmen

- Abweichungen von diesen Guardrails sind **nur zulässig**, wenn sie:
  - explizit dokumentiert sind
  - bewusst als Ausnahme gekennzeichnet sind

---

Hinweis: Dieses Dokument definiert **globale Guardrails**. Modul-spezifische Regeln existieren nur dort, wo ein Modul bewusst von diesen Standards abweicht.

