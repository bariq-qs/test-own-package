import type { Meta, StoryObj } from '@storybook/vue3';
import { fn } from '@storybook/test';
import { ref, watch } from 'vue';
import EditorTiptap from '../components/EditorTiptap/index.vue';

const Template = (args) => ({
  components: { EditorTiptap },
  setup() {
    const valueInput = ref<any>('<h1>test text</h1>')
    const updateModel = (val) => valueInput.value = val
    return { args, valueInput, updateModel }
  },
  template: '<EditorTiptap v-bind="args" @update:modelValue="updateModel" />'
})

const meta = {
  title: 'Components/EditorTiptap',
  component: EditorTiptap,
  render: Template,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: {
    placeholder: 'masih dicoba',
    modelValue: '<h1>i am back</h1>'
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  },
} satisfies Meta<typeof EditorTiptap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = Template.bind({})

Default.args = {
  placeholder: 'Default',
  modelValue: 'Yes'
}