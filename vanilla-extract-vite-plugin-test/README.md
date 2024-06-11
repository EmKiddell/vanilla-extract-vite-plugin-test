# vanilla-extract/vite-plugin test repo

This Vite, Vitest, React, Typescript project is an experiment to reproduce a problem to either prove or rule out it being due to a bug on the vanilla-extract/vite-plugin side. Our tests were all passing locally, but our pipeline was failing with an error message that suggested the @vanilla-extract/vite-plugin was not able to find the Header.css.ts file in the docker container during the test step.

