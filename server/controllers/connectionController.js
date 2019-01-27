module.exports = {
    addConnection: async (req, res) => {
        const {first_name, last_name, company, position, relation, email, linkedin, dateAdded} = req.body
        const {user_id} = req.session.user

        const db = req.app.get('db')

        const addedUser = await db.add_connection({user_id, first_name, last_name, company, position, relation, email, linkedin, dateAdded})
        
        res.status(200).send(addedUser)
    },
    getAllConnections: async (req, res) => {
        const {user_id} = req.session.user
        const db = req.app.get('db')

        const connections = await db.get_all_connections({user_id})

        res.status(200).send(connections)
    }
}