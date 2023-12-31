class CustomError extends Error {
  constructor(
    public message: string,
    public statusCode: number,
    private readonly privateMessage: string,
  ) {
    super(message);
  }
}

export default CustomError;
