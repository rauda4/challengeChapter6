const express = require("express");
const { getAllUsers, 
        getSingleUser, 
        createUser, 
        editUser, 
        deleteUser 
    } = require("./userController");

    const Prisma = require("@prisma/client");
    const prisma = new Prisma.PrismaClient();
 
const port = 8080
const app = express()
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
    })
);
app.use("/static", express.static("public"));
app.set("view engine", "ejs");

// Route frontend
app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/", async (req, res) => {
    const users = await prisma.user.findMany();
    res.render("index", {users:users});
});
app.get("/user/create", (req, res) => {
    res.render("create-user");
});

app.get("/user/update/:id", async (req, res) => {
    const id = Number(req.params.id);
  
    const user = await prisma.user.findUnique({where: {id}});
    res.render("update-user", {user});
});

// Route untuk submit
app.post("/login", (req, res) => {
    console.log("DI HIT");
    const { username, password } = req.body;

if (username === "admin" && password === "a"){
    res.redirect("/");
} else {
    res.redirect("/login");
}
});

app.post("/user/create", async (req, res)=>{
    const { username, password } = req.body;
    await prisma.user.create({
        data: {username, password},
    });
    res.redirect("/")
});

app.post("/user/update", async (req, res) => {
    const { id, username, password } = req.body;
    const numberId = Number(id);
  
    await prisma.user.update({
      where: { id: numberId },
      data: { username, password },
    });
    res.redirect("/");
  });


// Route API
app.get("/api/user", getAllUsers);
app.get("/api/user/:id",getSingleUser);
app.post("/api/user", createUser);
app.put("/api/user/:id", editUser);
app.delete("/api/user/:id", deleteUser);

app.listen(port, ()=>{
    console.log("server connected on localhost:",port);
});