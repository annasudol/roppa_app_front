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
        email: user.email,
        name: user.name,
        pic: user.picture
      },
      loggedInAt: Date.now()
    })

    return sendRedirect(event, '/dashboard')
  }
})
