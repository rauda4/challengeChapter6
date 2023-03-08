const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

async function main (){
    await prisma.user.upsert({
        where: { username:"rafika_auda"},
        update: {},
        create: {
            username: "rafika_auda",
            password: "test123",
        },
    });

    await prisma.user.upsert({
        where: { username:"gelap"},
        update: {},
        create: {
            username: "gelap",
            password: "test1234",
        }
    });

    await prisma.user.upsert({
        where: { username:"rizki"},
        update: {},
        create: {
            username: "rizki",
            password: "aaaaaa",
        }
    });
}

main()
    .then(async()=>{
        await prisma.$disconnect()
    })
    .catch(async (e)=>{
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })