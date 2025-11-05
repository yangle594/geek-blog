import __nuxt_component_0 from "./ContentQuery-C1dX4ExL.js";
import { defineComponent, useSlots, h, useSSRContext } from "vue";
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
import "vue/server-renderer";
import "./query-fqQzrjIs.js";
import "./preview-BoJJYEIv.js";
import "E:/code/blog/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "E:/code/blog/node_modules/destr/dist/index.mjs";
import "E:/code/blog/node_modules/nuxt/node_modules/ohash/dist/index.mjs";
const emptyNode = (slot, data) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentList>", slot, data }, null, 2));
const ContentList = defineComponent({
  name: "ContentList",
  props: {
    /**
     * Query props
     */
    /**
     * The path of the content to load from content source.
     * @default '/'
     */
    path: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * A query builder params object to be passed to <ContentQuery /> component.
     */
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  /**
   * Content empty fallback
   * @slot empty
   */
  /**
   * Content not found fallback
   * @slot not-found
   */
  render(ctx) {
    const slots = useSlots();
    const { path, query } = ctx;
    const contentQueryProps = {
      ...query || {},
      path: path || query?.path || "/"
    };
    return h(
      __nuxt_component_0,
      contentQueryProps,
      {
        // Default slot
        default: slots?.default ? ({ data, refresh, isPartial }) => slots.default({ list: data, refresh, isPartial, ...this.$attrs }) : (bindings) => emptyNode("default", bindings.data),
        // Empty slot
        empty: (bindings) => slots?.empty ? slots.empty(bindings) : emptyNode("default", bindings?.data),
        // Not Found slot
        "not-found": (bindings) => slots?.["not-found"] ? slots?.["not-found"]?.(bindings) : emptyNode("not-found", bindings?.data)
      }
    );
  }
});
const _sfc_main = ContentList;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContentList$1 = Object.assign(_sfc_main, { __name: "ContentList" });
export {
  ContentList$1 as default
};
//# sourceMappingURL=ContentList-z-duz1K_.js.map
