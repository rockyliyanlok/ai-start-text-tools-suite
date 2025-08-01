import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/example/_pathlessLayout/_nested-layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <div>
      <div>I'm a nested layout</div>
      <div className="flex gap-2 border-b">
        <Link
          to="/example/route-a"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Go to route A
        </Link>
        <Link
          to="/example/route-b"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Go to route B
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
