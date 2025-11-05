import { defineComponent, mergeProps, withAsyncContext, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'file://E:/code/blog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://E:/code/blog/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CT-ViGhv.mjs';
import { u as useAsyncData } from './asyncData-BND3nlFA.mjs';
import { q as queryContent } from './query-fqQzrjIs.mjs';
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
import 'file://E:/code/blog/node_modules/perfect-debounce/dist/index.mjs';
import 'file://E:/code/blog/node_modules/ohash/dist/index.mjs';
import './preview-BoJJYEIv.mjs';
import 'file://E:/code/blog/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://E:/code/blog/node_modules/nuxt/node_modules/ohash/dist/index.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TagCloud",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: tags } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("tags", async () => {
      const all = await queryContent("/blog").only(["tags"]).find();
      const counts = /* @__PURE__ */ new Map();
      for (const item of all) {
        for (const t of item.tags || []) {
          counts.set(t, (counts.get(t) || 0) + 1);
        }
      }
      return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap gap-2" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(tags) || [], ([name, count]) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: name,
          to: { path: "/blog", query: { tag: name } },
          class: "px-3 py-1 rounded-full bg-white/10 hover:bg-accent/20 border border-white/10 hover:border-accent/40 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="font-mono"${_scopeId}>#${ssrInterpolate(name)}</span><span class="text-white/60 ml-1"${_scopeId}>${ssrInterpolate(count)}</span>`);
            } else {
              return [
                createVNode("span", { class: "font-mono" }, "#" + toDisplayString(name), 1),
                createVNode("span", { class: "text-white/60 ml-1" }, toDisplayString(count), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TagCloud.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TagCloud = Object.assign(_sfc_main$1, { __name: "TagCloud" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tags",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><h1 class="text-2xl font-mono">\u6807\u7B7E</h1><div class="flex flex-wrap gap-2">`);
      _push(ssrRenderComponent(TagCloud, null, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tags.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tags-DBwSPXr2.mjs.map
