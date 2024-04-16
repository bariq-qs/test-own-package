<script setup lang="ts">
import {
  toRefs,
  watch
} from 'vue'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
// import Paragraph from '@tiptap/extension-paragraph'
// import Text from '@tiptap/extension-text'
// import Bold from '@tiptap/extension-bold'
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'
import MenuBar from './MenuBar.vue'

library.add(fas);
dom.watch();

type TEditorTipTapProps = {
  modelValue: string
  placeholder?: string
}

const props = withDefaults(defineProps<TEditorTipTapProps>(), {
  modelValue: '',
  placeholder: ''
})

const emits = defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()

const {
  modelValue,
  placeholder
} = toRefs(props)

const editor = useEditor({
  content: modelValue.value,
  extensions: [
    StarterKit,
    // Paragraph,
    // Text,
    // Bold,
    Underline,
    Placeholder.configure({
      placeholder: placeholder.value
    })
  ],
  onUpdate: () => {
    emits('update:modelValue', editor.value?.getHTML() ?? '')
  }
})

watch(modelValue, (value) => {
  const isSame = editor.value?.getHTML() === value

  if (isSame) {
    return
  }
  editor.value?.commands.setContent(value, false)
})
</script>

<template>
  <div class="tiptap-editor">
    <MenuBar :editor="editor" />
    <editor-content :editor="editor" class="wrapper" />
  </div>
</template>

<style>
.tiptap-editor .wrapper .tiptap {
  border: 1px solid #d2d2d2;
  background: #fff;
  color: #333;
  border-radius: 0px 0px 10px 10px;
  min-height: 100px;
  padding: 1rem;
  font-family: inherit;
}

.tiptap-editor .wrapper .tiptap.ProseMirror:focus {
  outline: none;
}

.tiptap-editor .wrapper .tiptap p {
  margin: 0;
}

.tiptap-editor .wrapper .tiptap p.is-editor-empty:first-child::before {
  color: #adb5bd;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}

.tiptap-editor.is-invalid .wrapper .tiptap {
  border-left: 1px solid #d7503d;
  border-right: 1px solid #d7503d;
  border-bottom: 1px solid #d7503d;
}

.tiptap-editor.is-invalid .tiptap-editor-menubar {
  border-top: 1px solid #d7503d;
  border-left: 1px solid #d7503d;
  border-right: 1px solid #d7503d;
}
</style>