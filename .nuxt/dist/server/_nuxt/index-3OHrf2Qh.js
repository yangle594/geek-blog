import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { P as PostList } from "./PostList-Cv9scYUh.js";
import { S as SearchBox } from "./SearchBox-BDWbXU7v.js";
import "./nuxt-link-CT-ViGhv.js";
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
import "./asyncData-BND3nlFA.js";
import "E:/code/blog/node_modules/perfect-debounce/dist/index.mjs";
import "./query-fqQzrjIs.js";
import "E:/code/blog/node_modules/ohash/dist/index.mjs";
import "./preview-BoJJYEIv.js";
import "E:/code/blog/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "E:/code/blog/node_modules/destr/dist/index.mjs";
import "E:/code/blog/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
import "./index-DZFdT2Dy.js";
import "@iconify/utils/lib/css/icon";
import "./composables-ByAEHeUj.js";
import "E:/code/blog/node_modules/nuxt/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><div class="flex items-center justify-between"><h1 class="text-2xl font-mono">博客</h1>`);
      _push(ssrRenderComponent(SearchBox, null, null, _parent));
      _push(`</div><div class="grid md:grid-cols-2 gap-6">`);
      _push(ssrRenderComponent(PostList, null, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-3OHrf2Qh.js.map
