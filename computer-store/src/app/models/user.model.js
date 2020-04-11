function User(id,firstName,lastName,email,password,city,street,role) {
    this.id = id,
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.password = password,
    this.city = city,
    this.street = street,
    this.role = role
}

module.exports = {
    User:User
}