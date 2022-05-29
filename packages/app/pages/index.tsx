import * as React from "react"
import Link from "next/link"
import { Icon, Label } from "@monorepo/ui-kit"

interface Props {
  posts: any[]
}

const BlogIndex = ({ posts }: Props) => {
  return (
    <div>
      <Label color="">Test</Label>
      <Icon name="Comments" />
      <h1>Acme&apos;s blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link passHref href={`/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

BlogIndex.getInitialProps = async () => {
  const posts = [
    { id: 1, title: "10 great drinking games" },
    { id: 2, title: "3 amazing hangover antidotes!" },
  ]
  return { posts }
}

export default BlogIndex
