var User = require("../models/User");
var RLinks = require("../models/RLinks");

function mml() {
    console.log("\n----- Totaldownline/Level Update -----");

    RLinks.find({}).then(rlinks => {
        if (rlinks.length > 0){
            const size = rlinks.length;

            for (let i = 0; i < size; i ++){
                let level = 0, total = 0;
                if (rlinks[i].level1.length > 0){
                    level ++;
                    total += rlinks[i].level1.length;
                }
                if (rlinks[i].level2.length > 0){
                    level ++;
                    total += rlinks[i].level2.length;
                }
                if (rlinks[i].level3.length > 0){
                    level ++;
                    total += rlinks[i].level3.length;
                }
                if (rlinks[i].level4.length > 0){
                    level ++;
                    total += rlinks[i].level4.length;
                }
                if (rlinks[i].level5.length > 0){
                    level ++;
                    total += rlinks[i].level5.length;
                }
                if (rlinks[i].level6.length > 0){
                    level ++;
                    total += rlinks[i].level6.length;
                }
                if (rlinks[i].level7.length > 0){
                    level ++;
                    total += rlinks[i].level7.length;
                }
                if (rlinks[i].level8.length > 0){
                    level ++;
                    total += rlinks[i].level8.length;
                }

                User.findOneAndUpdate({_id: rlinks[i].userId}, {$set: {"refObject.level": level, "refObject.totalDownline": total}}, function(err, doc){
                    if(err){
                        console.log("Something wrong when updating data!");
                    }
                });
            }
        }
    });
};

module.exports = mml;