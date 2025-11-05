import { _ as __nuxt_component_0 } from "./nuxt-link-CT-ViGhv.js";
import { defineComponent, withAsyncContext, unref, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { u as useAsyncData } from "./asyncData-BND3nlFA.js";
import { q as queryContent } from "./query-fqQzrjIs.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostList",
  __ssrInlineRender: true,
  props: {
    limit: { default: 0 },
    query: { default: "" }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("posts-" + props.query + "-" + props.limit, async () => {
      const q = queryContent("/blog").where({ _partial: false }).only(["_path", "title", "description", "date", "tags"]).sort({ date: -1 });
      if (props.query) {
        q.where({ $or: [
          { title: { $regex: props.query, $options: "i" } },
          { description: { $regex: props.query, $options: "i" } },
          { tags: { $contains: props.query } }
        ] });
      }
      if (props.limit && props.limit > 0) {
        q.limit(props.limit);
      }
      return q.find();
    }, "$k5ZFHEUFRQ")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(posts)?.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "contents" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(posts), (post) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: post._path,
            to: post._path,
            class: "glass p-6 hover:border-accent/50 transition block"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h3 class="font-mono text-lg mb-1"${_scopeId}>${ssrInterpolate(post.title)}</h3><p class="text-white/70 line-clamp-2"${_scopeId}>${ssrInterpolate(post.description)}</p><div class="mt-3 text-sm text-white/60 flex items-center gap-3"${_scopeId}><span${_scopeId}>${ssrInterpolate(post.date && new Date(post.date).toLocaleDateString())}</span><span class="flex gap-2"${_scopeId}><!--[-->`);
                ssrRenderList(post.tags || [], (t) => {
                  _push2(`<span class="px-2 py-0.5 rounded bg-white/10"${_scopeId}>#${ssrInterpolate(t)}</span>`);
                });
                _push2(`<!--]--></span></div>`);
              } else {
                return [
                  createVNode("h3", { class: "font-mono text-lg mb-1" }, toDisplayString(post.title), 1),
                  createVNode("p", { class: "text-white/70 line-clamp-2" }, toDisplayString(post.description), 1),
                  createVNode("div", { class: "mt-3 text-sm text-white/60 flex items-center gap-3" }, [
                    createVNode("span", null, toDisplayString(post.date && new Date(post.date).toLocaleDateString()), 1),
                    createVNode("span", { class: "flex gap-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(post.tags || [], (t) => {
                        return openBlock(), createBlock("span", {
                          key: t,
                          class: "px-2 py-0.5 rounded bg-white/10"
                        }, "#" + toDisplayString(t), 1);
                      }), 128))
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-white/60" }, _attrs))}>暂无文章。</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PostList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PostList = Object.assign(_sfc_main, { __name: "PostList" });
export {
  PostList as P
};
//# sourceMappingURL=PostList-Cv9scYUh.js.map
