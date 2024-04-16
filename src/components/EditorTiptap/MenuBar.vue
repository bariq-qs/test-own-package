<template>
  <div class="tiptap-editor-menubar">
    <template v-for="(menu, key) in menuBar" :key="key">
      <div class="divider" v-if="menu.type === 'divider'" :key="`divider${key}`" />
      <button class="btn-toggle" type="button" @click="menu.action"
        :class="{ 'is-active': menu?.isActive ? menu.isActive() : null }" v-else>
        <div class="m-icon" v-html="menu.icon"></div>
      </button>
    </template>
  </div>
</template>

<script setup lang="ts">
import {
  toRefs,
  ref
} from 'vue'
import type { Editor } from '@tiptap/vue-3'

type TMenuBarProps = {
  editor: Editor | undefined// tiptap Editor
}

const props = withDefaults(defineProps<TMenuBarProps>(), {})

const {
  editor
} = toRefs(props)
const menuBar = ref([
  {
    icon: `<i class="fas fa-bold"></i>`,
    title: 'Bold',
    action: () => editor.value?.chain().focus().toggleBold().run(),
    isActive: () => editor.value?.isActive('bold'),
  },
  {
    icon: `<i class="fas fa-italic"></i>`,
    title: 'Italic',
    action: () => editor.value?.chain().focus().toggleItalic().run(),
    isActive: () => editor.value?.isActive('italic'),
  },
  {
    icon: `<i class="fas fa-underline"></i>`,
    title: 'Underline',
    action: () => editor.value?.chain().focus().toggleUnderline().run(),
    isActive: () => editor.value?.isActive('underline'),
  },
  {
    icon: `<i class="fas fa-strikethrough"></i>`,
    title: 'Strike',
    action: () => editor.value?.chain().focus().toggleStrike().run(),
    isActive: () => editor.value?.isActive('strike'),
  },
  {
    icon: `<i class="fas fa-code"></i>`,
    title: 'Code',
    action: () => editor.value?.chain().focus().toggleCode().run(),
    isActive: () => editor.value?.isActive('code'),
  },
  // {
  //   icon: 'mark-pen-line',
  //   title: 'Highlight',
  //   action: () => editor.value?.chain().focus().toggleHighlight().run(),
  //   isActive: () => editor.value?.isActive('highlight'),
  // },
  {
    type: 'divider',
  },
  {
    icon: '<b>H1</b>',
    title: 'Heading 1',
    action: () => editor.value?.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: () => editor.value?.isActive('heading', { level: 1 }),
  },
  {
    icon: '<b>H2</b>',
    title: 'Heading 2',
    action: () => editor.value?.chain().focus().toggleHeading({ level: 2 }).run(),
    isActive: () => editor.value?.isActive('heading', { level: 2 }),
  },
  {
    icon: '<b>H3</b>',
    title: 'Heading 3',
    action: () => editor.value?.chain().focus().toggleHeading({ level: 3 }).run(),
    isActive: () => editor.value?.isActive('heading', { level: 3 }),
  },
  {
    icon: '<b>H4</b>',
    title: 'Heading 4',
    action: () => editor.value?.chain().focus().toggleHeading({ level: 4 }).run(),
    isActive: () => editor.value?.isActive('heading', { level: 4 }),
  },
  {
    icon: '<b>H5</b>',
    title: 'Heading 5',
    action: () => editor.value?.chain().focus().toggleHeading({ level: 5 }).run(),
    isActive: () => editor.value?.isActive('heading', { level: 5 }),
  },
  {
    icon: '<b>H6</b>',
    title: 'Heading 6',
    action: () => editor.value?.chain().focus().toggleHeading({ level: 6 }).run(),
    isActive: () => editor.value?.isActive('heading', { level: 6 }),
  },
  {
    icon: `<i class="fas fa-paragraph"></i>`,
    title: 'Paragraph',
    action: () => editor.value?.chain().focus().setParagraph().run(),
    isActive: () => editor.value?.isActive('paragraph'),
  },
  {
    type: 'divider',
  },
  {
    icon: `<i class="fas fa-list-ul"></i>`,
    title: 'Bullet List',
    action: () => editor.value?.chain().focus().toggleBulletList().run(),
    isActive: () => editor.value?.isActive('bulletList'),
  },
  {
    icon: `<i class="fas fa-list-ol"></i>`,
    title: 'Ordered List',
    action: () => editor.value?.chain().focus().toggleOrderedList().run(),
    isActive: () => editor.value?.isActive('orderedList'),
  },
  // {
  //   icon: 'code-box-line',
  //   title: 'Code Block',
  //   action: () => editor.value?.chain().focus().toggleCodeBlock().run(),
  //   isActive: () => editor.value?.isActive('codeBlock'),
  // },
  {
    icon: `<i class="fas fa-quote-left"></i>`,
    title: 'Blockquote',
    action: () => editor.value?.chain().focus().toggleBlockquote().run(),
    isActive: () => editor.value?.isActive('blockquote'),
  },
  // {
  //   icon: 'separator',
  //   title: 'Horizontal Rule',
  //   action: () => editor.value?.chain().focus().setHorizontalRule().run(),
  // },
  {
    type: 'divider',
  },
  // {
  //   icon: 'text-wrap',
  //   title: 'Hard Break',
  //   action: () => editor.value?.chain().focus().setHardBreak().run(),
  // },
  {
    icon: `<i class="fas fa-remove-format"></i>`,
    title: 'Clear Format',
    action: () => editor.value?.chain()
      .focus()
      .clearNodes()
      .unsetAllMarks()
      .run(),
  },
  // {
  //   type: 'divider',
  // },
  {
    icon: `<i class="fas fa-undo"></i>`,
    title: 'Undo',
    action: () => editor.value?.chain().focus().undo().run(),
  },
  {
    icon: `<i class="fas fa-redo"></i>`,
    title: 'Redo',
    action: () => editor.value?.chain().focus().redo().run(),
  },
])
</script>

<style>
.tiptap-editor-menubar {
  border-radius: 10px 10px 0px 0px;
  background: #fff;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-top: 1px solid #d2d2d2;
  border-left: 1px solid #d2d2d2;
  border-right: 1px solid #d2d2d2;
  justify-content: center;
}

.tiptap-editor-menubar .btn-toggle {
  border-radius: 4px 4px 4px 4px;
  border: 0.5px solid #dedede;
  background: transparent;
  padding: 4px 8px;
  cursor: pointer;
}

.tiptap-editor-menubar .btn-toggle.is-active {
  background-color: #757575;
}

.tiptap-editor-menubar .btn-toggle:hover {
  background: #f3f3f3;
}

.tiptap-editor-menubar .btn-toggle .m-icon {
  font-size: 14px;
}

.tiptap-editor-menubar .divider {
  background-color: #757575;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  width: 1px;
}
</style>