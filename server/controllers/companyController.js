module.exports = {
    getAllCompanies: async (req, res) => {
        const {user_id} = req.session.user
        if(!user_id) return res.status(200).send({message: 'Please sign in'})
        const db = req.app.get('db')
        const companies = await db.get_all_companies({user_id})
        res.status(200).send(companies)
    },
    addCompany: async (req, res) => {
        const {company_name, logo, description, location, website } = req.body
        const {user_id} = req.session.user
        const db = req.app.get('db')

        const existingCompany = await db.find_company({user_id, company_name })
        if(existingCompany[0]) return res.status(200).send({message: `Company ${company_name} already exists, please edit the existing company`})

        let [newCompany] = await db.add_company({user_id, company_name, logo, description, location, website})
        // newCompany = newCompany[0] //Not needed, destructured on line above.
        res.status(200).send(newCompany)
    },
}