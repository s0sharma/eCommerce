import bcrypt from 'bcryptjs'

const users = [
   {
      name: 'Admin User',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456', 10),
      isAdmin: true
   },
   {
      name: 'Amir Khan',
      email: 'amir@example.com',
      password: bcrypt.hashSync('123456', 10),
   },
   {
      name: 'srk',
      email: 'srk@example.com',
      password: bcrypt.hashSync('123456', 10),
   },
   {
      "name": "steve smith",
      "email": "steve@example.com",
      "password": bcrypt.hashSync('123456', 10),
}
]

export default users