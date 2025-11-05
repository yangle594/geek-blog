import __nuxt_component_1 from "./index-DZFdT2Dy.js";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { a as useRouter, u as useRoute } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchBox",
  __ssrInlineRender: true,
  props: {
    large: { type: Boolean }
  },
  setup(__props) {
    useRouter();
    const route = useRoute();
    const q = ref(route.query.q || "");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_1;
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: ["w-full", __props.large ? "max-w-2xl" : "max-w-sm"]
      }, _attrs))}><div class="flex items-center gap-2 glass px-3 py-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:magnifying-glass-duotone",
        class: "w-5 h-5 text-white/60"
      }, null, _parent));
      _push(`<input${ssrRenderAttr("value", unref(q))} type="search" placeholder="搜索标题 / 描述 / 标签" class="bg-transparent outline-none flex-1 placeholder:text-white/40"><button class="text-white/60 hover:text-accent" aria-label="Search">`);
      _push(ssrRenderComponent(_component_Icon, { name: "ph:arrow-right" }, null, _parent));
      _push(`</button></div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SearchBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SearchBox = Object.assign(_sfc_main, { __name: "SearchBox" });
export {
  SearchBox as S
};
//# sourceMappingURL=SearchBox-BDWbXU7v.js.map
