module.exports = {
    addConnection: async (req, res) => {
        const {name, company, relation, email, linkedin, dateAdded} = req.body
        const {user_id} = req.session.user

        const db = req.app.get('db')

        let addedUser = await db.add_connection({user_id, name, company, relation, email, linkedin, dateAdded})
        addedUser = addedUser[0]
        res.status(200).send(addedUser)
    }
}