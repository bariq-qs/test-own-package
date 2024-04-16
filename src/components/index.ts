import type { App } from "vue";
import EditorTiptap from "./EditorTiptap/index.vue";


export default {
  install: (app: App<Element>) => {
    app.component("EditorTiptap", EditorTiptap);
  },
};

export { EditorTiptap };