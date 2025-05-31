FROM node:lts AS runtime
WORKDIR /app

ARG IPFETCH

ENV HOST=0.0.0.0
ENV PORT=4321
ENV IPFETCH=${IPFETCH}

COPY . .

RUN npm install
RUN npx astro build

EXPOSE 4321
CMD node ./dist/server/entry.mjs
