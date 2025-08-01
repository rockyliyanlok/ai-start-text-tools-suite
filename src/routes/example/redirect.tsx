import { redirect, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/example/redirect')({
  beforeLoad: async () => {
    throw redirect({
      to: '/example/posts',
    })
  },
})
