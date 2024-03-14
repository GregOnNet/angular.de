---
title: "Webdave im Gespräch mit: Juri Strumpflohner"
description: Unser Trainer Webdave ist im Gespräch mit Juri Strumpflohner, dem Sr. Director of Developer Experience für Nx. Erfahre etwas über Juri, Nx und wie eine Entwicklungsarbeit in großen Teams durch effizientes Monorepo-Management erleichtert wird.
author: "Lulëzim Ukaj"
published_at: 2024-03-15 11:27:00.000000Z
header_source:
header_image: header.jpg
categories: "angular nx monorepo webdave interview"
---

## Das Interview mit Juri Strumpflohner

Hier kannst du dir das Gespräch mit Juri Strumpflohner und unserem Trainer Webdave ansehen!

<iframe class="" width="100%" height="315" src="https://www.youtube.com/watch?v=0waHOk3hoUs" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Einleitung

In der modernen Webentwicklung nutzen Teams Monorepos für große Projekte, um ihre Codebasis zu verwalten. Monorepo steht kurz für "Monolithisches Repository" und bedeutet nichts anderes, als dass der gesamte Code für mehrere Projekte in einem einzigen Repository gespeichert wird. Zum Beispiel verwendet Google Monorepos für die Entwicklung seines Chrome Browsers. Das Chromium Project ist ein riesiges Open-Source-Projekt mit über 25 Millionen Codezeilen, das von über 2.000 Entwicklern aus der ganzen Welt gepflegt wird. Anstatt hier separate Repositories für jedes Feature oder Extension zu haben, werden alle Projekte unter einem Dach vereint.

Monorepos bieten viele Vorteile, bringen aber auch Herausforderungen mit sich. Wie schaffe ich es, dass ein riesiges Team effizient zusammenarbeiten kann? Genau hier setzen Juri Strumpflohner und das NX Team an. NX ist ein modernes Tool, das speziell für die Entwicklung in Monorepos entwickelt wurde. NX bietet eine Vielzahl von Funktionen, die euch dabei helfen können, effizienter und produktiver zu arbeiten.

Welche sind das? Was ist Task Parallelisierung und Caching? Was sind bewährte Praktiken in der Softwareentwicklung in großen Teams? Welche realen Probleme löst in der Entwicklung?

Darüber und über noch viel mehr haben sich Web Dave und  Juri Strumpflohner, Sr. Director of Developer Experience for Nx unterhalten. Wer Juri ist und wie Juri zum NX Team gestoßen ist, erfahrt ihr natürlich auch. Schaut euch das Videogespräch dazu an.

In diesem Artikel zum Gespräch haben wir euch die Basics zusammengefasst und werden euch NX kurz vorstellen und euch einen Installation Guide aufgeschrieben. 


## Was ist NX?


<iframe class="" width="100%" height="315" src="https://www.youtube.com/watch?v=-_4WMl-Fn0w" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Nx ist ein Build-System mit integrierten Built-In-Tooling und fortgeschrittenen CI-Fähigkeiten. NX ist vor allem für Monorepos gedacht und hilft dir, diese sowohl lokal als auch auf CI zu pflegen und skalieren.

## Wie hilft dir NX?

Kurz gesagt, Nx hilft euch bei Builds und Tests, sowohl lokal auf deinem Computer als auch auf CI-Systemen (Continuous Integration, also Systeme, die automatisch deinen Code testen und vorbereiten). Dazu findest du NX Plugins, die es dir ermöglichen, verschiedene Entwicklungs-Tools nahtlos zu integrieren und zu automatisieren.

NX hilft dir dabei:

- **Optimierung bestehender Projekte:** Deine aktuellen Projekte optimieren, indem Builds und Tests beschleunigt werden, egal ob es sich um ein einzelnes Projekt oder ein Monorepo handelt.
- **Einfache Einrichtung neuer Projekte:** Neue Projekte einrichten, ohne alle Build-Tools selbst konfigurieren zu müssen. Das übernehmen die Nx Plugins für dich.
- **Problemlose Integration neuer Tools:** Neue Tools wie Storybook oder Tailwind CSS problemlos in dein Projekt einbinden.
- **Qualität:** Die Einheitlichkeit und Qualität deines Codes sicherstellen, indem du benutzerdefinierte Generatoren und Lint-Regeln verwendest.
- **Automatisierung:** Eine automatisierte Code-Migration zu nutzen.

## Wie funktioniert NX?

Nx funktioniert modular, sodass du nur die Features nutzen kannst, die du wirklich brauchst.

<img
style="max-width: 80%"
src="" alt="Infographik zum Aufbau eines NX Workspaces"
class="lazy img-fluid img-rounded" data-src="infographic.jpg" data-srcset="infographic.jpg"
/>



Das NX-Paket bietet technologieunabhängige Features wie workspace analysis, task running, caching, distribution, code generation, and automated code migrations. Plugins sind NPM-Pakete, die auf den Funktionen aufbauen, die das Nx-Paket bietet. Nx-Plugins enthalten code generators, executors, und eine automatisierte Code-Migration, um deine Werkzeuge up to date zu halten. Devkit ist ein Set von Hilfsmitteln zum Bauen von Nx-Plugins. Nx Cloud hilft dir, dein Projekt auf CI zu skalieren, indem es dir Remote-Caching und eine leichtere Aufgabenstellung bietet. Dazu werden GitHub, GitLab und BitBucket integriert und durchsuchbare, strukturierte Logs bereitgestellt. Nx Console ist eine Erweiterung für VSCode, IntelliJ und VIM. Sie bietet Code-Autovervollständigung, interaktive Generatoren, Visualisierungen des Arbeitsbereichs, leistungsstarke Refaktorisierungen und mehr. 

## Installation von NX

### Neuen Workspace erstellen

Um einen neuen Nx workspace zu erstellen, verwende zunächst folgenden Befehl:

```
npx create-nx-workspace
```

Dieser Prozess führt dich durch das Setup und fragt, ob du einen Monorepo oder eine Standalone App bevorzugst und ob du mit einem leeren oder einer vorkonfigurierten Setup beginnen möchtest.

```
npx create-nx-workspace@latest

NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Where would you like to create your workspace? · myorg
? Which stack do you want to use? …

None:          Configures a TypeScript/JavaScript project with minimal structure.
React:         Configures a React application with your framework of choice.
Vue:           Configures a Vue application with your framework of choice.
Angular:       Configures a Angular application with modern tooling.
Node:          Configures a Node API application with your framework of choice.
```

Nachdem du deinen Arbeitsbereich erstellt hast, kannst du:

* Einzelne Aufgaben ausführen mit: ```vnpx nx <ziel> <projekt>```
* Mehrere Aufgaben gleichzeitig ausführen mit: ```npx nx run-many <ziel> <projekt>```


Führe ```npx nx run-many -t build``` zweimal aus, um zu sehen, wie das leistungsfähige Caching von Nx deinen Build-Prozess beschleunigt.
Erfahre mehr über die running tasks.


### NX zu einem bereits betehenden Repository hinzufügen

Falls du Nx zu einem bestehenden Repository hinzufügen möchtest:


```npx nx@latest init```


Du kannst das Nx NPM-Paket auch manuell installieren und eine `nx.json` zur Konfiguration erstellen. 
Lerne mehr, wie du Nx in einem bestehenden Projekt einsetzen kannst:

### Nx global installieren

Du kannst Nx auch global installieren.

Je nachdem, welchen Paketmanager du nutzt, musst du einen der folgenden Befehle verwenden:

```npm add --global nx@latest```


Der Vorteil einer globalen Installation von NX ist, dass du Befehle für NX nicht mit npx, yarn oder pnpm starten musst. Stattdessen leitet die globale Installation die Ausführung einfach an die lokale NX-Installation in deinem Projektverzeichnis weiter. Dadurch vermeidest du Probleme, die durch veraltete, global installierte Pakete entstehen könnten.


## Juri Strumpflohner

<img
style="max-width: 80%"
src="" alt="Infographik zum Aufbau eines NX Workspaces"
class="lazy img-fluid img-rounded" data-src="profilepic.jpg" data-srcset="profilepic.jpg"
/>


Juri Strumpflohner ist Entwickler, Speaker, Content Creator und Sr. Director of Developer Experience for Nx.
Juri ist Softwareentwickler seit über 15 Jahren, vom Backend bis hin zu Web-Apps. In dieser Zeit hat er sowohl in kleinen Startups als auch großen Unternehmen gearbeitet und als Softwarearchitekt auch Fortune-500-Unternehmen beraten. Als Google Developers Expert und Egghead instructor teilt er sein Wissen mit Leidenschaft und ist so eine führende Stimme in der Entwickler Community geworden.
Du findest Juris Artikel auf seinem Blog juri.dev, seine Videokurse auf Egghead oder dem Nx YouTube Kanal oder auf unzähligen Konferenzen weltweit.


Natürlich findest du Juri auch auf Social Media:


X (bitte Social Media Plattform präzisieren)
Twitch
GitHub
LinkedIn
