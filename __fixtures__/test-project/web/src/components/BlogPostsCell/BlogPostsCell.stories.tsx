import type { ComponentStory } from '@storybook/react'

import { Loading, Empty, Failure, Success } from './BlogPostsCell'
import { standard } from './BlogPostsCell.mock'

export const loading: ComponentStory<typeof Loading> = (args) => {
  return Loading ? <Loading {...args} /> : <></>
}

export const empty: ComponentStory<typeof Empty> = (args) => {
  return Empty ? <Empty {...args} /> : <></>
}

export const failure: ComponentStory<typeof Failure> = (args) => {
  return Failure ? <Failure error={new Error('Oh no')} {...args} /> : <></>
}

export const success: ComponentStory<typeof Success> = (args) => {
  return Success ? <Success {...standard()} {...args} /> : <></>
}

export default { title: 'Cells/BlogPostsCell' }
