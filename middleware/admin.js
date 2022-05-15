export default function ({ store, redirect}) {

  console.log(store.state.isAdmin)

  if (!store.state.isAdmin) {
    return redirect(`/`);
  }
}
