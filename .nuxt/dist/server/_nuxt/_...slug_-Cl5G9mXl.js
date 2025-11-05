import __nuxt_component_0 from "./ContentDoc-DUvVJ7K1.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-CT-ViGhv.js";
import { mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ContentQuery-C1dX4ExL.js";
import "E:/code/blog/node_modules/ohash/dist/index.mjs";
import "./asyncData-BND3nlFA.js";
import "E:/code/blog/node_modules/perfect-debounce/dist/index.mjs";
import "../server.mjs";
import "E:/code/blog/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "E:/code/blog/node_modules/hookable/dist/index.mjs";
import "E:/code/blog/node_modules/unctx/dist/index.mjs";
import "E:/code/blog/node_modules/h3/dist/index.mjs";
import "vue-router";
import "E:/code/blog/node_modules/radix3/dist/index.mjs";
import "E:/code/blog/node_modules/defu/dist/defu.mjs";
import "E:/code/blog/node_modules/ufo/dist/index.mjs";
import "@iconify/vue";
import "E:/code/blog/node_modules/klona/dist/index.mjs";
import "./query-fqQzrjIs.js";
import "./preview-BoJJYEIv.js";
import "E:/code/blog/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "E:/code/blog/node_modules/destr/dist/index.mjs";
import "E:/code/blog/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "./ContentRenderer-CQAKrf3j.js";
import "./ContentRendererMarkdown-D8vVUaYQ.js";
import "E:/code/blog/node_modules/scule/dist/index.mjs";
import "property-information";
import "./node-yHY0X6Y7.js";
import "./composables-ByAEHeUj.js";
import "E:/code/blog/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ContentDoc = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<article${ssrRenderAttrs(mergeProps({ class: "prose prose-invert max-w-none" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ContentDoc, null, {
    "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="glass p-8"${_scopeId}><h1${_scopeId}>未找到文章</h1><p${_scopeId}>你访问的文章不存在或已被移动。</p>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "btn-primary mt-4 inline-block"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`返回博客`);
            } else {
              return [
                createTextVNode("返回博客")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "glass p-8" }, [
            createVNode("h1", null, "未找到文章"),
            createVNode("p", null, "你访问的文章不存在或已被移动。"),
            createVNode(_component_NuxtLink, {
              to: "/blog",
              class: "btn-primary mt-4 inline-block"
            }, {
              default: withCtx(() => [
                createTextVNode("返回博客")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</article>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ____slug_ as default
};
//# sourceMappingURL=_...slug_-Cl5G9mXl.js.map
