import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><h1 class="text-2xl font-mono">关于我</h1><div class="glass p-6 leading-7"><p>我是 Yangle，一名热爱工程实践与知识分享的开发者。这个博客参考优秀程序员的简洁风格，强调内容与体验。</p><ul class="list-disc pl-6 text-white/80 mt-3"><li>技术方向：Web 全栈、前端工程化、低代码与内容系统</li><li>栈：Nuxt, Vue, TypeScript, Node, TailwindCSS</li><li>开源：<a href="https://github.com/yangle594" target="_blank" class="text-accent">GitHub/yangle594</a></li></ul></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  about as default
};
//# sourceMappingURL=about-CxK8s3vr.js.map
