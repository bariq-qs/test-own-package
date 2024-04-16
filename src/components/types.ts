import type EditorTiptap from './EditorTiptap/index.vue'
export * from ".";

declare module "vue" {
  interface GlobalComponents {
    EditorTiptap: typeof EditorTiptap;
  }
}