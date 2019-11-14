const Sequalize = require('sequelize');
const db = new Sequalize('postgres://localhost:5432/wikistack', {
  logging: false
});

db.authenticate().
  then(() => {
    console.log('connected to the database');
  })

const Page = db.define('page', {
  title: {
    type: Sequalize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequalize.STRING,
    allowNull: false
  },
  content: Sequalize.TEXT,
  status: {
    type: Sequalize.ENUM('open', 'closed'),
    defaultValue: 'closed'
  }
})
const createSlug = (str) => {
  return str.replace(/\s+/g, '_').replace(/\W/g, '')
}

Page.beforeValidate((pageInstance) => {
  pageInstance.slug = createSlug(pageInstance.title)
})


const User = db.define('user', {
  name: {
    type: Sequalize.STRING,
    allowNull: false
  },
  email: {
    type: Sequalize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})


module.exports = {
  db, Page, User
}
