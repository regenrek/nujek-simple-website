import { forwardProps } from '@nujek/shared'
import TextImage from '~/components/TextImage'
export default {
  name: 'BlokTextImage',
  props: ['blok'],
  functional: true,
  render (h, context) {
    return h(TextImage, {
      props: forwardProps(context.props.blok)
    })
  }
}
