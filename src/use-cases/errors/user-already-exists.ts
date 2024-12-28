export class UserAlreadyExistisError extends Error {
  constructor() {
    super('E-email already exists.')
  }
}
