

const admin = require("../firebase/firebaseAdmin");

const getAll = async (req, res) => {
    try {

        const userRecord = await admin.auth().listUsers(100);
        res.status(201).json({
            users: userRecord
        })
    } catch (err) {
        console.log("Firebase get all user error", error);
        res.status(500).json({ error: error.message });

    }
}

const create = async (req, res) => {
    const { email, password, displayName } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required." });
    }
    try {
        const userRecord = await admin.auth().createUser({
            email, password, displayName
        });
        res.status(201).json({
            message: "User created successfully",
            uid: userRecord.uid,
            email: userRecord.email,
        });

    } catch (err) {
        console.log("Firebase create user error", error);
        res.status(500).json({ error: error.message });

    }

}

const getById = async (req, res) => {
    const { email, password } = req.body;
    try {

    } catch (err) {
        res.status(500).json({ error: error.message });
    }

}

const update = async (req, res) => {
    const { email, password } = req.body;
    try {

    } catch (err) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = { getAll, getById, create, update };