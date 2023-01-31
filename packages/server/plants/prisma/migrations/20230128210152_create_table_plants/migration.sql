-- CreateTable
CREATE TABLE "Plants" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" BYTEA,
    "color" TEXT NOT NULL,
    "species" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Plants_pkey" PRIMARY KEY ("id")
);
