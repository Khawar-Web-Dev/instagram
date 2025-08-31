import { Link } from "@tanstack/react-router"
// import { useSelector } from "react-redux"

const Home = () => {

  // const counter = useSelector((state:any) => state.states.counter);

  return (
    <div>
      <span>Home Testing</span>
      <Link to="/about">About</Link>
      {/* <div>
        {counter}
      </div> */}
    </div>
  )
}

export default Home