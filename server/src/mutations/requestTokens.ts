interface RequestTokenArgs {
  code: string
}

export const requestTokens = (
  parent: undefined | null,
  args: RequestTokenArgs
) => {
  console.log(args)

  return {
    accessToken: 'test access token'
  }
}
