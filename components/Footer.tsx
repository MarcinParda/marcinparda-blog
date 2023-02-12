import siteMetadata from '@/data/siteMetadata'
import Icon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <Icon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <Icon kind="github" href={siteMetadata.github} size={6} />
          <Icon kind="facebook" href={siteMetadata.facebook} size={6} />
          <Icon kind="youtube" href={siteMetadata.youtube} size={6} />
          <Icon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <Icon kind="twitter" href={siteMetadata.twitter} size={6} />
        </div>
        <div className="mb-6 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}
