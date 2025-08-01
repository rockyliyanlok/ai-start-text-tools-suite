import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/example/users/')({
  component: UsersIndexComponent,
})

function UsersIndexComponent() {
  return (
    <div>
      Select a user or{' '}
      <a
        href="/example/api/users"
        className="text-blue-800 hover:text-blue-600 underline"
      >
        view as JSON
      </a>
    </div>
  )
}
