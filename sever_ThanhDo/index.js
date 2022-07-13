const express = require("express"); // lấy
const cors = require("cors");

const app = express(); // khoi tao sever
const PORT = process.env.PORT || 8000; // đặt tên cổng mình chạy
app.use(express.json()); // chuyển đổi các dữ liệu thành json
app.use(cors());

const { User } = require("./database.js");

app.post("/user", async (req, res) => {
  try {
    const { acount, name, role, status } = req.body;

    if (acount === "" || name === "" || role === "" || status === "") {
      throw Error("Not empty");
    }

    await User.create({ 
        acount: acount,
        name: name,
        role: role,
        status: status
    });
    res.status(200).json({ message: "Create success" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


const PAGE_SIZE = 2
app.get("/user", async (req, res) => {
    var page = req.query.page;
    if (page) {
        page = parseInt(page)
        const skips = (page - 1) * PAGE_SIZE
        User.find({})
            .skip(skips)
            .limit(PAGE_SIZE)
            .then( data => { res.json(data) })
        .catch(err => {
            res.status(400).json({ message: err.message });
        })

    } else {
        try {
            const todos = await User.find();
            res.status(200).json(todos);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
});

app.delete("/user", async (req, res) => {
  try {
    await User.deleteOne({ _id: req.body._id });
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/user", async (req, res) => {
    try {
        await User.updateOne({ 
            _id: req.body._id,
            acount: req.body.acount,
            name: req.body.name,
            role: req.body.role,
            status: req.body.status,
        });
        res.status(200).json({ message: "success" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(PORT, () => {
  console.log("sever is listening on : ", PORT);
}); // bắt đầu lắng nghe trên cổng

// 2** thành công
// 4** do client giửi bị sai
// 5** lỗi sever
