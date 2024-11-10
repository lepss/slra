-- CreateTable
CREATE TABLE "Registration" (
    "id" SERIAL NOT NULL,
    "lastname" TEXT NOT NULL,
    "fistname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "affiliation" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);
