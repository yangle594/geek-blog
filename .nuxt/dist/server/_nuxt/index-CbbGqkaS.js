import { _ as __nuxt_component_0 } from "./nuxt-link-CT-ViGhv.js";
import __nuxt_component_1 from "./index-DZFdT2Dy.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { P as PostList } from "./PostList-Cv9scYUh.js";
import "E:/code/blog/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "E:/code/blog/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "E:/code/blog/node_modules/hookable/dist/index.mjs";
import "E:/code/blog/node_modules/unctx/dist/index.mjs";
import "E:/code/blog/node_modules/h3/dist/index.mjs";
import "vue-router";
import "E:/code/blog/node_modules/radix3/dist/index.mjs";
import "E:/code/blog/node_modules/defu/dist/defu.mjs";
import "@iconify/vue";
import "E:/code/blog/node_modules/klona/dist/index.mjs";
import "@iconify/utils/lib/css/icon";
import "./composables-ByAEHeUj.js";
import "E:/code/blog/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
import "./asyncData-BND3nlFA.js";
import "E:/code/blog/node_modules/perfect-debounce/dist/index.mjs";
import "./query-fqQzrjIs.js";
import "E:/code/blog/node_modules/ohash/dist/index.mjs";
import "./preview-BoJJYEIv.js";
import "E:/code/blog/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "E:/code/blog/node_modules/destr/dist/index.mjs";
import "E:/code/blog/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-10" }, _attrs))}><div class="glass p-8 md:p-12"><div class="flex items-start justify-between gap-6"><div class="space-y-3"><h1 class="text-3xl md:text-4xl font-mono">Hello, I am <span class="text-accent">Yangle</span>.</h1><p class="text-white/70 max-w-2xl">极客风格 · 简洁大气 · 新颖。这里记录我的技术洞见、工程实践与成长笔记。</p><div class="flex gap-3 pt-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`阅读博客`);
            _push2(ssrRenderComponent(_component_Icon, { name: "ph:arrow-right" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode("阅读博客"),
              createVNode(_component_Icon, { name: "ph:arrow-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/projects",
        class: "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 hover:border-accent/50 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`项目`);
          } else {
            return [
              createTextVNode("项目")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:terminal-window-duotone",
        class: "w-16 h-16 text-accent/80 hidden md:block"
      }, null, _parent));
      _push(`</div></div><section><div class="flex items-center justify-between mb-4"><h2 class="font-mono text-xl">最新文章</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "text-white/60 hover:text-accent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`查看全部`);
          } else {
            return [
              createTextVNode("查看全部")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid md:grid-cols-2 gap-6">`);
      _push(ssrRenderComponent(PostList, { limit: 4 }, null, _parent));
      _push(`</div></section></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CbbGqkaS.js.map
