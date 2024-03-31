<script lang="ts">
  import type { IconName } from "./name.d.ts";
  export let id: IconName;
  export let  size = 32
</script>

<svg width={size} height={size} {...$$restProps}>
  <use href={`/images/icons/sprite.svg#${id}`} />
</svg>