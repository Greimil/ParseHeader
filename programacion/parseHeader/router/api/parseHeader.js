const express = require("express")
const ip = require("ip")
const router = express.Router()

router.get("/api/whoami", (req, res) => {
    console.log(req.headers);

    res.json({ipaddress: ip.address("public"), language: req.header("accept-language"), software: req.header("user-agent")  })
} )


module.exports = router