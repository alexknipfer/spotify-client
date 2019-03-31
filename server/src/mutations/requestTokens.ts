interface RequestTokenArgs {
  code: string
}

export const requestTokens = (
  parent: null | undefined,
  args: RequestTokenArgs
) => {
  return {
    accessToken: 'test access token'
  }
}
