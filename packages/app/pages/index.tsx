import * as React from "react"
import Link from "next/link"
import { Icon, Label } from "@monorepo/ui-kit"

const Index = () => {
  return (
    <div>
      <Label color="alabaster">Test</Label>
      <Icon name="Comments" />
      <ul>
        <Link href="/about">About</Link>
      </ul>
    </div>
  )
}

export default Index
