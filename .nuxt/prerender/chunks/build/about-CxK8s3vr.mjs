import { mergeProps, useSSRContext } from 'file://E:/code/blog/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://E:/code/blog/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><h1 class="text-2xl font-mono">\u5173\u4E8E\u6211</h1><div class="glass p-6 leading-7"><p>\u6211\u662F Yangle\uFF0C\u4E00\u540D\u70ED\u7231\u5DE5\u7A0B\u5B9E\u8DF5\u4E0E\u77E5\u8BC6\u5206\u4EAB\u7684\u5F00\u53D1\u8005\u3002\u8FD9\u4E2A\u535A\u5BA2\u53C2\u8003\u4F18\u79C0\u7A0B\u5E8F\u5458\u9C7C\u76AE\u7684\u7B80\u6D01\u98CE\u683C\uFF0C\u5F3A\u8C03\u5185\u5BB9\u4E0E\u4F53\u9A8C\u3002</p><ul class="list-disc pl-6 text-white/80 mt-3"><li>\u6280\u672F\u65B9\u5411\uFF1AWeb \u5168\u6808\u3001\u524D\u7AEF\u5DE5\u7A0B\u5316\u3001\u4F4E\u4EE3\u7801\u4E0E\u5185\u5BB9\u7CFB\u7EDF</li><li>\u6808\uFF1ANuxt, Vue, TypeScript, Node, TailwindCSS</li><li>\u5F00\u6E90\uFF1A<a href="https://github.com/yangle594" target="_blank" class="text-accent">GitHub/yangle594</a></li></ul></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about-CxK8s3vr.mjs.map
