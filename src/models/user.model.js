export class User {
    constructor({
      id,
      email,
      passwordHash,
      firstName,
      lastName,
      role,
      createdAt,
      updatedAt,
    }) {
      this.id = id;
      this.email = email;
      this.passwordHash = passwordHash;
      this.firstName = firstName;
      this.lastName = lastName;
      this.role = role;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }