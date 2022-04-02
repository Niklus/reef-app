export function changeRoute(app, event) {
  const hash = location.hash;
  /* Only change route for the following hashes */
  if (
    hash === "" ||
    hash === "#home" ||
    hash === "#about" ||
    hash === "#contact"
  ) {
    app.data.route = hash;
  } else {
    /**
     * For all the other anchor tags that need to link a section within a page
     * Remove hash from url after jumping to a section allowing the
     * user to stay on same page when they do a refresh
     */
    history.replaceState("", "", event.oldURL);
  }
}
