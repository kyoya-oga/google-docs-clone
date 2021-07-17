import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import { signOut, useSession } from 'next-auth/client'

const Header = () => {
  const [Session] = useSession()

  return (
    <header className="sticky top-0 z-50 flex items-center w-full px-4 py-2 bg-white shadow-md ">
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="hidden w-20 border-0 h-14 md:inline-flex"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="hidden ml-1 text-2xl text-gray-700 md:inline-flex">
        Docs
      </h1>

      <div className="flex items-center flex-grow w-2/4 px-5 py-2 mx-5 text-gray-600 bg-gray-100 rounded-lg md:mx-20 focus-within:text-gray-600 focus-within:shadow-md md:w-full">
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 text-sm bg-transparent outline-none "
        />
      </div>
      <Button
        color="gray"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="w-12 h-12 ml-5 border-0 md:w-20 md:h-14 md:ml-20"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>
      <img
        loading="lazy"
        src={Session?.user.image}
        alt={Session?.user.name}
        className="w-12 h-12 ml-2 rounded-full cursor-pointer md:inline-flex"
        onClick={signOut}
      />
    </header>
  )
}

export default Header
