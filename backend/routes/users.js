var express = require('express');
var router = express.Router();
var userModel = require("../models/userModel");
const Cart = require("../models/cartModel");
const JWT = require('jsonwebtoken');
const config = require("../ultil/tokenConfig");

// Đăng nhập bằng token
router.post("/login", async function(req, res){
  try{
    const {username, password} = req.body;
    const checkUser = await userModel.findOne({username: username, password: password});
    
    if(checkUser == null){
      res.status(200).json({status: false, message:"Username or Password không đúng"});
    } else {
      const token = JWT.sign({username: username}, config.SECRETKEY, {expiresIn: '1h'});
      const refreshToken = JWT.sign({username: username}, config.SECRETKEY, {expiresIn: '1d'});

      const userId = checkUser._id;
      let cart = await Cart.findOne({userId: userId});
      if (!cart){
        cart = new Cart({
          userId: userId
        })
        await cart.save();
      }
      res.status(200).json({status: true, token: token, refreshToken: refreshToken, cartId: cart._id});
    }
  } catch(e){
    res.status(400).json({status:false, message:"Đã có lỗi xảy ra" + e});
  }
});

//lay token băng email
router.post("/get-token", async function (req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email, password: password });

    if (!user) {
      return res.status(401).json({ status: false, message: "Email hoặc mật khẩu không đúng" });
    }

    const token = JWT.sign({ username: user.username, email: user.email }, config.SECRETKEY, { expiresIn: '30d' });
    const refreshToken = JWT.sign({ username: user.username, email: user.email }, config.SECRETKEY, { expiresIn: '1d' });

    res.status(200).json({
      status: true,
      message: "Lấy token thành công",
      token: token,
      refreshToken: refreshToken,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Đã có lỗi xảy ra", error: error.message });
  }
});


// Lấy danh sách tất cả người dùng
router.get("/all", async function (req, res) {
  try {
    const token = req.header("Authorization")?.split(" ")[1]; 
    if (!token) {
      return res.status(401).json({ status: false, message: "Không xác thực" });
    }

    JWT.verify(token, config.SECRETKEY, async function (err, decoded) {
      if (err) {
        return res.status(403).json({ status: false, message: "Token không hợp lệ hoặc hết hạn" });
      }

      const userList = await userModel.find({}, "-password"); 
      res.status(200).json({ status: true, data: userList });
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Đã có lỗi xảy ra", error: error.message });
  }
});

// Thêm người dùng mới
// router.post("/add", async function (req, res) {
//   try {
//     const token = req.header("Authorization")?.split(" ")[1];
//     if (!token) {
//       return res.status(401).json({ status: false, message: "Không xác thực" });
//     }

//     JWT.verify(token, config.SECRETKEY, async function (err, decoded) {
//       if (err) {
//         return res.status(403).json({ status: false, message: "Token không hợp lệ hoặc hết hạn" });
//       }

//       const { email, username, password, role } = req.body;

//       // Tạo người dùng mới
//       const newUser = new userModel({
//         email,
//         username,
//         password,
//         role: role || "buyer", 
//         createDay: new Date(),
//         updateDay: new Date(),
//       });

//       await newUser.save();
//       res.status(201).json({ status: true, message: "Thêm người dùng thành công", data: newUser });
//     });
//   } catch (error) {
//     res.status(500).json({ status: false, message: "Đã có lỗi xảy ra", error: error.message });
//   }
// });

router.post("/register", async function (req, res) {
  try {
    const { email, username, password } = req.body;

    // Kiểm tra xem email đã tồn tại chưa
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ status: false, message: "Email đã tồn tại" });
    }

    // Tạo tài khoản mới
    const newUser = new userModel({
      email,
      username,
      password,
      role: "buyer",
      createDay: new Date(),
      updateDay: new Date(),
    });

    await newUser.save();
    res.status(201).json({ status: true, message: "Đăng ký thành công" });
  } catch (error) {
    res.status(500).json({ status: false, message: "Lỗi server", error: error.message });
  }
});

// Sửa thông tin người dùng
router.put("/update/:id", async function (req, res) {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ status: false, message: "Không xác thực" });
    }

    JWT.verify(token, config.SECRETKEY, async function (err, decoded) {
      if (err) {
        return res.status(403).json({ status: false, message: "Token không hợp lệ hoặc hết hạn" });
      }

      const userId = req.params.id; 
      const updatedData = req.body; 

      // Cập nhật thông tin người dùng
      const user = await userModel.findByIdAndUpdate(
        userId,
        {
          ...updatedData, 
          updateDay: new Date(), 
        },
        { new: true, runValidators: true } 
      );

      if (!user) {
        return res.status(404).json({ status: false, message: "Không tìm thấy người dùng" });
      }

      res.status(200).json({ status: true, message: "Cập nhật thông tin thành công", data: user });
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Đã có lỗi xảy ra", error: error.message });
  }
});


// Xóa người dùng
router.delete("/delete/:id", async function (req, res) {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ status: false, message: "Không xác thực" });
    }

    JWT.verify(token, config.SECRETKEY, async function (err, decoded) {
      if (err) {
        return res.status(403).json({ status: false, message: "Token không hợp lệ hoặc hết hạn" });
      }

      const userId = req.params.id; 

      const user = await userModel.findByIdAndDelete(userId);

      if (!user) {
        return res.status(404).json({ status: false, message: "Không tìm thấy người dùng" });
      }

      res.status(200).json({ status: true, message: "Xóa người dùng thành công" });
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Đã có lỗi xảy ra", error: error.message });
  }
});
module.exports = router;
