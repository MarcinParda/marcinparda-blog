import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'

const MAX_DISPLAY = 3

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {HeroSection}
        <RecentPosts posts={posts} />
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Wszystkie artykuły"
          >
            Wszystkie artykuły &rarr;
          </Link>
        </div>
      )}
    </>
  )
}

export const HeroSection = (
  <section className="flex">
    <div className="space-y-2 pt-6 pb-8 md:space-y-4 md:max-w-2xl">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Marcin Parda
      </h1>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
        {siteMetadata.description}
      </p>
      <p className="text-lg leading-7 text-gray-900 dark:text-gray-100 text-justify">
        Witaj na mojej stronie - miejscu w którym utrwalam swoją wiedzę o{' '}
        <b>programowaniu stron internetowych</b> i dzielę się nią z innymi. Możesz tu znaleźć moje{' '}
        przemyślenia na temat programowania, rozwoju osobistego i automatyzacji pracy. W zakładce{' '}
        <b>projekty</b> znajdziesz projekty nad którymi pracowałem lub aktualnie pracuję. Miłego{' '}
        czytania!
      </p>
      <div>
        <Link
          href={`/about`}
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 underline"
          aria-label={`Read about me`}
        >
          Więcej o mnie &rarr;
        </Link>
      </div>
    </div>
    <div className="flex grow items-center justify-center">
      <span className="-mt-4 text-9xl animate-wave">👋</span>
    </div>
  </section>
)

export const RecentPosts = ({ posts }: { posts: Omit<Blog, 'body' | '_raw' | '_id'>[] }) => {
  return (
    <section className="pt-8">
      <h2 className="mb-3 text-3xl font-bold leading-8 tracking-tight">Ostatnie artykuły</h2>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post) => {
          const { slug, date, title, summary, tags } = post
          return (
            <li key={slug} className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Opublikowane</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h2>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "${title}"`}
                      >
                        Czytaj więcej &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
