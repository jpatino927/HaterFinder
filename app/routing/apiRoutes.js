const haters = require('../data/haters');
module.exports = function(app){
    app.get('/api/haters',function(req, res){
        res.json(haters);
    })

    app.post('/api/haters',function (req, res){
        let match = {
            name:"",
            photo:"",
            haterDifferences:99999
        }
        let userData = req.body;
        let userScores = userData.score;
        let totalDifference = 0;
        for (let i = 0; i < haters.length; i++){
            let currentHater = haters[i];
            totalDifference = 0;
            for (let h = 0; h < currentHater.score.length; h++){
                let currentHaterScore = currentHater.score[h];
                let currentUserScore = userScores[h];
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentHaterScore))
            }
            if(totalDifference <= match.haterDifferences){
                match.name = currentHater.name;
                match.photo = currentHater.photo;
                match.haterDifferences = totalDifference;
            }
            
        }
        haters.push(userData);
        res.json(match);
        
    })
}