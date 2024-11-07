export default defineOAuthGoogleEventHandler({
  config: {
    authorizationParams: {
      access_type: 'offline'
    }
  },
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: {
        id: user.id,
        login: user.email
      },
      loggedInAt: Date.now()
    })

    return sendRedirect(event, '/')
  }
})
