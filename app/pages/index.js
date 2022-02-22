import Carousel from "../components/Carousel"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div
    class="
        flex
        items-center
        justify-center
        w-screen
        h-screen
        bg-gradient-to-r
        from-amber-200
        to-blue-200">
			<Carousel />
     {/* <div className="sm:inline-flex sm:my-10">
          <div class="text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              class="rounded-full w-32 mb-4 mx-auto"
              alt="Avatar"
            />
            <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>
            <p class="text-gray-500">Web designer</p>
          </div>
  </div>*/}
    </div>
  )
}
