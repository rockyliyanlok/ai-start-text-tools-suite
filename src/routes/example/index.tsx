import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/example/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="p-2">
    <h3>Welcome /example!!!</h3>
  </div>
}
