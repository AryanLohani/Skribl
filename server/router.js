const  express = require('express');
const router = express.Router();

router.get('/api', (req , res) =>{
    res.send({text : "server is up and running"});
});

router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = router;