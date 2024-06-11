# vanilla-extract/vite-plugin test repo

This project, using Vite, Vitest, React, and TypeScript, aims to isolate a potential issue in the vanilla-extract/vite-plugin. Specifically, we are investigating a scenario where local tests pass, but the CI pipeline fails, citing an error that @vanilla-extract/vite-plugin cannot locate the Header.css.ts file within the Docker container during the test phase.

