# tutorHub

flask --app app run --debug

export PRISMA_CLIENT_ENGINE_TYPE=binary
export PRISMA_CLI_QUERY_ENGINE_TYPE=binary
export PRISMA_MIGRATION_ENGINE_BINARY="./prismaBins/migration-engine.exe.sha256"
export PRISMA_QUERY_ENGINE_BINARY="./prismaBins/query_engine.dll.node.sha256"

npx prisma init --datasource-provider sqlite
npx prisma -v


npx prisma migrate dev --name init



model Lesson {
  id String @id @default(uuid())
  title String
  complete Boolean
  createdAt DateTime @default(now())
}



export PRISMA_CLIENT_ENGINE_TYPE=binary
export PRISMA_CLI_QUERY_ENGINE_TYPE=binary
export PRISMA_MIGRATION_ENGINE_BINARY="./prismaBins/migration-engine.exe.sha256"
export PRISMA_QUERY_ENGINE_BINARY="./prismaBins/query_engine.dll.node.sha256"

PRISMA_CLIENT_ENGINE_TYPE=library
PRISMA_CLI_QUERY_ENGINE_TYPE=library
PRISMA_ENGINES_MIRROR=http://prisma-builds.s3-eu-west-1.amazonaws.com/