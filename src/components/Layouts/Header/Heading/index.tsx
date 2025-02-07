import { Link } from '@/components/Link'
import { PathMap } from '@/const/paths'

export const Heading = () => {
  return (
    <h1>
      <Link
        href={PathMap.home()}
        className="text-xl font-bold hover:no-underline"
      >
        Vinyl
      </Link>
    </h1>
  )
}
