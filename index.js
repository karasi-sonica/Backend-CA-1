const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.post('/login', (req, res) => {
    const {email, password} = req.body;

    if(!email){
        return res.send("Email cannot be empty");
    }

    if(!password){
        return res.send("Password cannot be empty");
    }

    res.send("User created!!")
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));