import { defineComponent, mergeProps, useSSRContext } from 'file://E:/code/blog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://E:/code/blog/node_modules/vue/server-renderer/index.mjs';
import { P as PostList } from './PostList-Cv9scYUh.mjs';
import { S as SearchBox } from './SearchBox-BDWbXU7v.mjs';
import './nuxt-link-CT-ViGhv.mjs';
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
import './asyncData-BND3nlFA.mjs';
import 'file://E:/code/blog/node_modules/perfect-debounce/dist/index.mjs';
import './query-fqQzrjIs.mjs';
import 'file://E:/code/blog/node_modules/ohash/dist/index.mjs';
import './preview-BoJJYEIv.mjs';
import 'file://E:/code/blog/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://E:/code/blog/node_modules/nuxt/node_modules/ohash/dist/index.mjs';
import './index-DZFdT2Dy.mjs';
import 'file://E:/code/blog/node_modules/@iconify/utils/lib/css/icon.mjs';
import './composables-ByAEHeUj.mjs';
import 'file://E:/code/blog/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs))}><div class="flex items-center justify-between"><h1 class="text-2xl font-mono">\u535A\u5BA2</h1>`);
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

export { _sfc_main as default };
//# sourceMappingURL=index-3OHrf2Qh.mjs.map
