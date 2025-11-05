import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><h1 class="text-2xl font-mono">项目</h1><div class="grid md:grid-cols-2 gap-6"><div class="glass p-6"><h3 class="font-mono text-lg mb-2">个人博客平台</h3><p class="text-white/70">基于 Nuxt 4 与 @nuxt/content 构建的内容系统，极客风设计。</p><div class="mt-3 flex gap-3 text-sm text-white/70"><span class="px-2 py-0.5 rounded bg-white/10">Nuxt</span><span class="px-2 py-0.5 rounded bg-white/10">Tailwind</span><span class="px-2 py-0.5 rounded bg-white/10">Content</span></div></div><div class="glass p-6"><h3 class="font-mono text-lg mb-2">更多项目</h3><p class="text-white/70">访问 GitHub 查看我更多的开源与练手项目。</p><a href="https://github.com/yangle594" target="_blank" class="btn-primary mt-3 inline-flex">GitHub</a></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  projects as default
};
//# sourceMappingURL=projects-DPLGLYn_.js.map
