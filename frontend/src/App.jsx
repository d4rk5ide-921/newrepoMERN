import Pages from './Pages/Pages'
const App = () => {

  let user = null;
  try {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      user = JSON.parse(storedUser);
    }
  } catch (err) {
    console.error("Invalid user JSON in localStorage, clearing...", err);
    localStorage.removeItem("user");
  }
  console.log(user)

  return (
    <>

      <Pages />


    </>
  )
}

export default App