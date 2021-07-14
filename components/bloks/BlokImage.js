import { forwardProps } from '@nujek/shared'
import Text from '~/components/atoms/Text'
export default {
  name: 'BlokImage',
  props: ['Blok'],
  render (h, context) {
    return h(Text, {
      props: forwardProps(context.props.blok)
    })
  }
}
