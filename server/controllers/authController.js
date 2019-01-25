const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {name, email, password, profile_pic } = req.body;
        const db = req.app.get('db')
        
        let foundUser = await db.find_user(email)
        if(foundUser[0]) {
            return res.status(200).send({message: `Email already in use`})
        }
        else{
            let salt = bcrypt.genSaltSync(10)
            let hash = bcrypt.hashSync(password, salt)
            let newUser = await db.create_user({name, email, password, hash, profile_pic})
            // let name = 'kenny'
            // let {user_id: id, name, email, profile_pic} = newUser[0]
            // req.session.user = {
            //     id, 
            //     name, 
            //     email, 
            //     profile_pic
            // }
            req.session.user = newUser[0]
            res.status(200).send(req.session.user)
        }
    },
    login: async (req, res) => {
        const {email, password } = req.body
        const db = req.app.get('db')

        let foundUser = await db.find_user(email)
        if(!foundUser[0]) return res.status(200).send({message: `user not found`})
        else{
            let matchingCredentials = bcrypt.compareSync(password, foundUser[0].hash)
            const {user_id, name, profile_pic} = foundUser[0]
            if(matchingCredentials){
                req.session.user = {
                    user_id,
                    name,
                    email,
                    profile_pic
                }
                res.status(200).send(req.session.user)
            }else{
                res.status(200).send({message: `incorrect password`})
            }
        }
    },
    getUserData: (req, res) => {
        res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy()
        // res.redirect('http:localhost:/3001')
        res.status(200).send({message: `logged out`})
    }
}