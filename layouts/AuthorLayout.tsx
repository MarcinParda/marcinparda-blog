import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import Icon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Javascript from '@/components/icons/javascript.svg'
import Typescript from '@/components/icons/typescript.svg'
import Cypress from '@/components/icons/cypress.svg'
import Docker from '@/components/icons/docker.svg'
import Express from '@/components/icons/express.svg'
import Git from '@/components/icons/git.svg'
import Graphql from '@/components/icons/graphql.svg'
import Jest from '@/components/icons/jest.svg'
import Mongodb from '@/components/icons/mongodb.svg'
import Nestjs from '@/components/icons/nestjs.svg'
import Nextdotjs from '@/components/icons/nextdotjs.svg'
import Nodedotjs from '@/components/icons/nodedotjs.svg'
import Postgresql from '@/components/icons/postgresql.svg'
import Prisma from '@/components/icons/prisma.svg'
import React from '@/components/icons/react.svg'
import Vitest from '@/components/icons/vitest.svg'

interface Skill {
  name: string
  icon: ReactNode
}

const skills: Skill[] = [
  { name: 'Typescript', icon: Typescript },
  { name: 'Javascript', icon: Javascript },
  { name: 'Node.js', icon: Nodedotjs },
  { name: 'Next.js', icon: Nextdotjs },
  { name: 'React', icon: React },
  { name: 'Prisma', icon: Prisma },
  { name: 'Nest.js', icon: Nestjs },
  { name: 'Express', icon: Express },
  { name: 'GraphQL', icon: Graphql },
  { name: 'Docker', icon: Docker },
  { name: 'MongoDB', icon: Mongodb },
  { name: 'PostgreSQL', icon: Postgresql },
  { name: 'Vitest', icon: Vitest },
  { name: 'Cypress', icon: Cypress },
  { name: 'Jest', icon: Jest },
  { name: 'Git', icon: Git },
]

interface Job {
  company: string
  title: string
  date: string
  responsibilities: string[]
}

const jobs: Job[] = [
  {
    company: 'STX Next',
    title: 'Javascript developer',
    date: '04.2022 – Present',
    responsibilities: [
      'Working on maintaining and developing a mobile application',
      'Creating a chrome extension',
      'Working on a fin-tech project',
      'Integrating with payment systems',
      'Creating an MVP of the project',
      'Assisting and advising other team members',
      'Technical consultation with the client',
      'Working with foreign clients in different time zones',
      'Code reviews, refactoring, testing.',
    ],
  },
  {
    company: 'Ermlab Software',
    title: 'Front-end developer',
    date: '07.2020 – 03.2022',
    responsibilities: [
      'Creating web applications using React and Angular technologies',
      'Creating data collection applications for scientific research',
      'Creating websites that enable users to register, log in, perform actions on forms, and view data retrieved from APIs in the form of tables, graphs, and diagrams',
      'Creating tools for manual API testing',
      'Co-creating a Google Chrome extension',
      'Working on client applications',
      'Working in a team consisting of linguists, doctors, and programmers',
      'Keeping up with programming tools and libraries',
      'Technically supervising learning meetings and leading several of them.',
    ],
  },
]

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <PageSEO title={`About • ${name}`} description={`About me • ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About me
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <Icon kind="mail" href={`mailto:${email}`} />
              <Icon kind="github" href={github} />
              <Icon kind="linkedin" href={linkedin} />
              <Icon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <section>{children}</section>
            <section>
              <h2>🛠️ My main skills</h2>
              <ul className="p-0 flex flex-wrap list-none justify-center">
                {skills.map(({ name, icon: Icon }) => (
                  <li key={name} className="basis-full md:basis-1/2 xl:basis-1/3 px-2">
                    <Skill icon={Icon} name={name} />
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2>💼 Experience</h2>
              {jobs.map(({ company, title, date, responsibilities }) => (
                <Job
                  key={company}
                  company={company}
                  title={title}
                  date={date}
                  responsibilities={responsibilities}
                />
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

const Skill = ({ icon: Icon, name }) => {
  return (
    <div className="dark:bg-darkPrimary flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 px-4 dark:border-neutral-700 hover:border-gray-500 hover:dark:border-neutral-500 hover:dark:bg-darkSecondary sm:justify-start md:origin-top transition duration-300">
      <div className="pointer-events-none relative select-none transition group-hover:scale-110">
        <Icon className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-8 w-8" />
      </div>
      <p className="pointer-events-none select-none text-sm font-semibold">{name}</p>
    </div>
  )
}

const Job = ({ company, title, date, responsibilities }: Job) => {
  return (
    <div className="mb-16">
      <h3 className="m-0">{title}</h3>
      <div className="dark:text-white">{company}</div>
      <div className="text-sm">{date}</div>
      <div className="mt-4 dark:text-white">My job responsibilities:</div>
      <ul>
        {responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>
    </div>
  )
}
