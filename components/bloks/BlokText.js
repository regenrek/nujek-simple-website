import { forwardProps } from '@nujek/shared'
import Text from '~/components/atoms/Text'
export default {
  name: 'BlokText',
  functional: true,
  props: ['blok'],
  render (h, context) {
    return h(Text, {
      props: forwardProps(context.props.blok)
    })
  }
}
