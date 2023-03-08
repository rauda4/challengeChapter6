-- CreateTable
CREATE TABLE "UserJokiRank" (
    "id" SERIAL NOT NULL,
    "game" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "serverid" INTEGER NOT NULL,
    "RankAwal" TEXT NOT NULL,
    "TargetRank" TEXT NOT NULL,

    CONSTRAINT "UserJokiRank_pkey" PRIMARY KEY ("id")
);
