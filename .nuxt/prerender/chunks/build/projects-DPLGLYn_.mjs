import { mergeProps, useSSRContext } from 'file://E:/code/blog/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://E:/code/blog/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><h1 class="text-2xl font-mono">\u9879\u76EE</h1><div class="grid md:grid-cols-2 gap-6"><div class="glass p-6"><h3 class="font-mono text-lg mb-2">\u4E2A\u4EBA\u535A\u5BA2\u5E73\u53F0</h3><p class="text-white/70">\u57FA\u4E8E Nuxt 4 \u4E0E @nuxt/content \u6784\u5EFA\u7684\u5185\u5BB9\u7CFB\u7EDF\uFF0C\u6781\u5BA2\u98CE\u8BBE\u8BA1\u3002</p><div class="mt-3 flex gap-3 text-sm text-white/70"><span class="px-2 py-0.5 rounded bg-white/10">Nuxt</span><span class="px-2 py-0.5 rounded bg-white/10">Tailwind</span><span class="px-2 py-0.5 rounded bg-white/10">Content</span></div></div><div class="glass p-6"><h3 class="font-mono text-lg mb-2">\u66F4\u591A\u9879\u76EE</h3><p class="text-white/70">\u8BBF\u95EE GitHub \u67E5\u770B\u6211\u66F4\u591A\u7684\u5F00\u6E90\u4E0E\u7EC3\u624B\u9879\u76EE\u3002</p><a href="https://github.com/yangle594" target="_blank" class="btn-primary mt-3 inline-flex">GitHub</a></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { projects as default };
//# sourceMappingURL=projects-DPLGLYn_.mjs.map
