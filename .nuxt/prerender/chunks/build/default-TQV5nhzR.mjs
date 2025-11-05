import { _ as __nuxt_component_0 } from './nuxt-link-CT-ViGhv.mjs';
import __nuxt_component_1 from './index-DZFdT2Dy.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'file://E:/code/blog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate } from 'file://E:/code/blog/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file://E:/code/blog/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file://E:/code/blog/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://E:/code/blog/node_modules/h3/dist/index.mjs';
import 'file://E:/code/blog/node_modules/unified/index.js';
import 'file://E:/code/blog/node_modules/remark-parse/index.js';
import 'file://E:/code/blog/node_modules/remark-rehype/index.js';
import 'file://E:/code/blog/node_modules/remark-mdc/dist/index.mjs';
import 'file://E:/code/blog/node_modules/defu/dist/defu.mjs';
import 'file://E:/code/blog/node_modules/remark-gfm/index.js';
import 'file://E:/code/blog/node_modules/rehype-external-links/index.js';
import 'file://E:/code/blog/node_modules/rehype-sort-attribute-values/index.js';
import 'file://E:/code/blog/node_modules/rehype-sort-attributes/index.js';
import 'file://E:/code/blog/node_modules/rehype-raw/index.js';
import 'file://E:/code/blog/node_modules/detab/index.js';
import 'file://E:/code/blog/node_modules/scule/dist/index.mjs';
import 'file://E:/code/blog/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://E:/code/blog/node_modules/hast-util-to-string/index.js';
import 'file://E:/code/blog/node_modules/github-slugger/index.js';
import 'file://E:/code/blog/node_modules/destr/dist/index.mjs';
import 'file://E:/code/blog/node_modules/hookable/dist/index.mjs';
import 'file://E:/code/blog/node_modules/node-mock-http/dist/index.mjs';
import 'file://E:/code/blog/node_modules/klona/dist/index.mjs';
import 'file://E:/code/blog/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://E:/code/blog/node_modules/pathe/dist/index.mjs';
import 'file://E:/code/blog/node_modules/@nuxt/icon/node_modules/pathe/dist/index.mjs';
import 'file://E:/code/blog/node_modules/@iconify/utils/lib/index.mjs';
import 'file://E:/code/blog/node_modules/@nuxt/icon/node_modules/ohash/dist/index.mjs';
import 'file://E:/code/blog/node_modules/consola/dist/index.mjs';
import 'file://E:/code/blog/node_modules/unstorage/dist/index.mjs';
import 'file://E:/code/blog/node_modules/unstorage/drivers/fs.mjs';
import 'file:///E:/code/blog/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://E:/code/blog/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://E:/code/blog/node_modules/nitropack/node_modules/ohash/dist/index.mjs';
import 'file://E:/code/blog/node_modules/unctx/dist/index.mjs';
import 'file://E:/code/blog/node_modules/vue-router/vue-router.node.mjs';
import 'file://E:/code/blog/node_modules/@iconify/vue/dist/iconify.mjs';
import 'file://E:/code/blog/node_modules/@iconify/utils/lib/css/icon.mjs';
import './composables-ByAEHeUj.mjs';
import 'file://E:/code/blog/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';
import './asyncData-BND3nlFA.mjs';
import 'file://E:/code/blog/node_modules/perfect-debounce/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Icon = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-dvh grid grid-rows-[auto,1fr,auto]" }, _attrs))}><header class="border-b border-white/10 sticky top-0 z-50 bg-background/70 backdrop-blur"><div class="container-g flex items-center justify-between h-14">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex items-center gap-2 group"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:alien-duotone",
          class: "w-6 h-6 text-accent"
        }, null, _parent2, _scopeId));
        _push2(`<span class="font-mono tracking-wide group-hover:text-accent transition"${_scopeId}>yangle \xB7 blog</span>`);
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:alien-duotone",
            class: "w-6 h-6 text-accent"
          }),
          createVNode("span", { class: "font-mono tracking-wide group-hover:text-accent transition" }, "yangle \xB7 blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<nav class="flex items-center gap-4">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/blog",
    class: "hover:text-accent"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/projects",
    class: "hover:text-accent"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Projects`);
      } else {
        return [
          createTextVNode("Projects")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/tags",
    class: "hover:text-accent"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tags`);
      } else {
        return [
          createTextVNode("Tags")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "hover:text-accent"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/search",
    class: "hover:text-accent",
    "aria-label": "Search"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          name: "ph:magnifying-glass-duotone",
          class: "w-5 h-5"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            name: "ph:magnifying-glass-duotone",
            class: "w-5 h-5"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a href="https://github.com/yangle594" target="_blank" rel="noreferrer" class="hover:text-accent" aria-label="GitHub">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "ph:github-logo-duotone",
    class: "w-5 h-5"
  }, null, _parent));
  _push(`</a></nav></div></header><main class="container-g py-8">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main><footer class="border-t border-white/10 py-6 text-sm text-white/60"><div class="container-g flex items-center justify-between"><p>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} yangle \xB7 Crafted with Nuxt</p><div class="flex items-center gap-3"><a href="/rss.xml" class="hover:text-accent">RSS</a><a href="https://github.com/yangle594" target="_blank" rel="noreferrer" class="hover:text-accent">GitHub</a></div></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-TQV5nhzR.mjs.map
