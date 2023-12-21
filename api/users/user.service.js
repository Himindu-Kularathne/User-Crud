const pool = require('../../Config/database');

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into registration(first_name, last_name, gender, email, password, number
             values(?,?,?,?,?,?)`, 
             [
                    data.first_name,
                    data.last_name,
                    data.gender,
                    data.email,
                    data.password,
                    data.number
             ],
                (error, results, fields) => {
                    if(error){
                        return callBack(error);
                    }
                    return callBack(null, results);
                }

        );
    }
};