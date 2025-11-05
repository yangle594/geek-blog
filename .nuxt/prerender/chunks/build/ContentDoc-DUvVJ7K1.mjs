import __nuxt_component_0$1 from './ContentQuery-C1dX4ExL.mjs';
import __nuxt_component_1 from './ContentRenderer-CQAKrf3j.mjs';
import { defineComponent, useSlots, h, unref, watch, useSSRContext } from 'file://E:/code/blog/node_modules/vue/index.mjs';
import { withTrailingSlash, joinURL, withoutTrailingSlash, hasProtocol } from 'file://E:/code/blog/node_modules/ufo/dist/index.mjs';
import { b as useRuntimeConfig, u as useRoute } from './server.mjs';
import { u as useHead } from './composables-ByAEHeUj.mjs';
import 'file://E:/code/blog/node_modules/ohash/dist/index.mjs';
import './asyncData-BND3nlFA.mjs';
import 'file://E:/code/blog/node_modules/perfect-debounce/dist/index.mjs';
import './query-fqQzrjIs.mjs';
import './preview-BoJJYEIv.mjs';
import 'file://E:/code/blog/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file://E:/code/blog/node_modules/h3/dist/index.mjs';
import 'file://E:/code/blog/node_modules/destr/dist/index.mjs';
import 'file://E:/code/blog/node_modules/nuxt/node_modules/ohash/dist/index.mjs';
import 'file://E:/code/blog/node_modules/klona/dist/index.mjs';
import './ContentRendererMarkdown-D8vVUaYQ.mjs';
import 'file://E:/code/blog/node_modules/scule/dist/index.mjs';
import 'file://E:/code/blog/node_modules/property-information/index.js';
import './node-yHY0X6Y7.mjs';
import 'file://E:/code/blog/node_modules/vue/server-renderer/index.mjs';
import 'file://E:/code/blog/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
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
import 'file://E:/code/blog/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://E:/code/blog/node_modules/hast-util-to-string/index.js';
import 'file://E:/code/blog/node_modules/github-slugger/index.js';
import 'file://E:/code/blog/node_modules/hookable/dist/index.mjs';
import 'file://E:/code/blog/node_modules/node-mock-http/dist/index.mjs';
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
import 'file://E:/code/blog/node_modules/nuxt/node_modules/unhead/dist/utils.mjs';

const useContentHead = (_content, to = useRoute()) => {
  const content = unref(_content);
  const config = useRuntimeConfig();
  const refreshHead = (data = content) => {
    var _a;
    if (!to.path || !data) {
      return;
    }
    const head = Object.assign({}, (data == null ? void 0 : data.head) || {});
    head.meta = [...head.meta || []];
    head.link = [...head.link || []];
    const title = head.title || (data == null ? void 0 : data.title);
    if (title) {
      head.title = title;
      if (!head.meta.some((m) => m.property === "og:title")) {
        head.meta.push({
          property: "og:title",
          content: title
        });
      }
    }
    const host = config.public.content.host;
    if (host) {
      const _url = joinURL(host != null ? host : "/", config.app.baseURL, to.fullPath);
      const url = config.public.content.trailingSlash ? withTrailingSlash(_url) : withoutTrailingSlash(_url);
      if (!head.meta.some((m) => m.property === "og:url")) {
        head.meta.push({
          property: "og:url",
          content: url
        });
      }
      if (!head.link.some((m) => m.rel === "canonical")) {
        head.link.push({
          rel: "canonical",
          href: url
        });
      }
    }
    const description = (head == null ? void 0 : head.description) || (data == null ? void 0 : data.description);
    if (description && head.meta.filter((m) => m.name === "description").length === 0) {
      head.meta.push({
        name: "description",
        content: description
      });
    }
    if (description && !head.meta.some((m) => m.property === "og:description")) {
      head.meta.push({
        property: "og:description",
        content: description
      });
    }
    const image = (head == null ? void 0 : head.image) || (data == null ? void 0 : data.image);
    if (image && head.meta.filter((m) => m.property === "og:image").length === 0) {
      if (typeof image === "string") {
        head.meta.push({
          property: "og:image",
          content: host && !hasProtocol(image) ? new URL(joinURL(config.app.baseURL, image), host).href : image
        });
      }
      if (typeof image === "object") {
        const imageKeys = [
          "src",
          "secure_url",
          "type",
          "width",
          "height",
          "alt"
        ];
        for (const key of imageKeys) {
          if (key === "src" && image.src) {
            const isAbsoluteURL = hasProtocol(image.src);
            const imageURL = isAbsoluteURL ? image.src : joinURL(config.app.baseURL, (_a = image.src) != null ? _a : "/");
            head.meta.push({
              property: "og:image",
              content: host && !isAbsoluteURL ? new URL(imageURL, host).href : imageURL
            });
          } else if (image[key]) {
            head.meta.push({
              property: `og:image:${key}`,
              content: image[key]
            });
          }
        }
      }
    }
    {
      useHead(head);
    }
  };
  watch(() => unref(_content), refreshHead, { immediate: true });
};
const ContentDoc = defineComponent({
  name: "ContentDoc",
  props: {
    /**
     * Renderer props
     */
    /**
     * The tag to use for the renderer element if it is used.
     * @default 'div'
     */
    tag: {
      type: String,
      required: false,
      default: "div"
    },
    /**
     * Whether or not to render the excerpt.
     * @default false
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * Query props
     */
    /**
     * The path of the content to load from content source.
     * @default useRoute().path
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
    },
    /**
     * Whether or not to map the document data to the `head` property.
     */
    head: {
      type: Boolean,
      required: false,
      default: void 0
    }
  },
  /**
   * Document empty fallback
   * @slot empty
   */
  /**
   * Document not found fallback
   * @slot not-found
   */
  render(ctx) {
    const { contentHead } = useRuntimeConfig().public.content;
    const slots = useSlots();
    const { tag, excerpt, path, query, head } = ctx;
    const shouldInjectContentHead = head === void 0 ? contentHead : head;
    const contentQueryProps = {
      ...query || {},
      path: path || (query == null ? void 0 : query.path) || withTrailingSlash(useRoute().path),
      find: "one"
    };
    const emptyNode = (slot, data) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentDoc>", slot, data }, null, 2));
    return h(
      __nuxt_component_0$1,
      contentQueryProps,
      {
        // Default slot
        default: (slots == null ? void 0 : slots.default) ? ({ data, refresh, isPartial }) => {
          var _a;
          if (shouldInjectContentHead) {
            useContentHead(data);
          }
          return (_a = slots.default) == null ? void 0 : _a.call(slots, { doc: data, refresh, isPartial, excerpt, ...this.$attrs });
        } : ({ data }) => {
          if (shouldInjectContentHead) {
            useContentHead(data);
          }
          return h(
            __nuxt_component_1,
            { value: data, excerpt, tag, ...this.$attrs },
            // Forward local `empty` slots to ContentRenderer if it is used.
            { empty: (bindings) => (slots == null ? void 0 : slots.empty) ? slots.empty(bindings) : emptyNode("default", data) }
          );
        },
        // Empty slot
        empty: (bindings) => {
          var _a;
          return ((_a = slots == null ? void 0 : slots.empty) == null ? void 0 : _a.call(slots, bindings)) || h("p", null, "Document is empty, overwrite this content with #empty slot in <ContentDoc>.");
        },
        // Not Found slot
        "not-found": (bindings) => {
          var _a;
          return ((_a = slots == null ? void 0 : slots["not-found"]) == null ? void 0 : _a.call(slots, bindings)) || h("p", null, "Document not found, overwrite this content with #not-found slot in <ContentDoc>.");
        }
      }
    );
  }
});
const _sfc_main = ContentDoc;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "ContentDoc" });

export { __nuxt_component_0 as default };
//# sourceMappingURL=ContentDoc-DUvVJ7K1.mjs.map
