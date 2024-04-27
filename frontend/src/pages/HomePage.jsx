import { Link } from "react-router-dom"
import LeftComponent from "../components/LeftComponent"
import RightComponent from "../components/RightComponent"

export default function HomePage() {
  return (
    <div className="flex">
        <LeftComponent></LeftComponent>
        <RightComponent></RightComponent>
    </div>
  )
}
