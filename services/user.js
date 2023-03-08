const Prisma = require("@prisma/client");
const prisma = new Prisma.PrismaClient();

const getAllUsers = async () => {
    return await  prisma.user.findMany();
};

const getSingleUser = async (id) =>{
    return await prisma.user.findUnique({where:{id: id} });
};

module.exports = {getAllUsers, getSingleUser};