export class FetchError extends Error {
  public code!: number

  constructor(code: number, message?: string) {
    super(message)
    this.code = code
    Object.setPrototypeOf(this, new.target.prototype)
  }
}
