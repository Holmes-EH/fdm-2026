# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

FROM base AS builder
COPY . .
RUN bun install --frozen-lockfile --production
COPY ./vite.config.ts vite.config.ts
RUN bun run build


# copy production dependencies and source code into final image
FROM base AS release
COPY --from=builder /usr/src/app/.output .output
COPY --from=builder /usr/src/app/package.json .

# run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", ".output/server/index.mjs" ]
