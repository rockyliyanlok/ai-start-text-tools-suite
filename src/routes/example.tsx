import * as React from 'react'
import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/example')({
  component: ExampleLayout,
})

function ExampleLayout() {
  return (
    <>
      <div className="p-2 flex gap-2 text-lg">
        <Link
          to="/example"
          activeProps={{
            className: 'font-bold',
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{' '}
        <Link
          to="/example/posts"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Posts
        </Link>{' '}
        <Link
          to="/example/users"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Users
        </Link>{' '}
        <Link
          to="/example/route-a"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Pathless Layout
        </Link>{' '}
        <Link
          to="/example/deferred"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Deferred
        </Link>{' '}
        <Link
          to="/example/this-route-does-not-exist"
          activeProps={{
            className: 'font-bold',
          }}
        >
          This Route Does Not Exist
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  )
}
