import bcrypt from 'bcryptjs'

const users = [
   {
      name: 'Admin User',
      email: 'admin@examle.com',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: true
   },
   {
      name: 'Amir Khan',
      email: 'amir@examle.com',
      password: bcrypt.hashSync('123456', 10),
   },
   {
      name: 'srk',
      email: 'srk@examle.com',
      password: bcrypt.hashSync('123456', 10),
   },
]

export default users