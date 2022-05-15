const cookieparser = process.server ? require("cookieparser") : undefined;

export const state = () => {
  return {
    auth: null,
    isAdmin: false
  };
};
export const mutations = {
  setAuth(state, auth) {
    state.auth = auth;
  },

  setAdmin(state, isAdmin) {
    state.isAdmin = isAdmin
  }
};
export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let auth = null;
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      try {
        auth = JSON.parse(parsed.auth);
      } catch (err) {
        // No valid cookie found
      }
    }
    commit("setAuth", auth);
  }
};
