<script type="ts">
  import { constants } from "../lib/constants";
  import Icon from "./Icon/Icon.svelte";
</script>

<ul class="social-media">
  <li>
    <a href={constants.YOUTUBE} target="_blank" rel="noreferrer"><Icon id="youtube" /></a>
  </li>
  <li>
    <a href={constants.TWITTER} target="_blank" rel="noreferrer"><Icon id="twitter" /></a>
  </li>
  <li>
    <a href={constants.GITHUB} target="_blank" rel="noreferrer"><Icon id="github" /></a>
  </li>
  <li>
    <a href={constants.TIKTOK} target="_blank" rel="noreferrer"><Icon id="tiktok" /></a>
  </li>
  <li>
    <a href={constants.LINKEDIN} target="_blank" rel="noreferrer"><Icon id="linkedin" /></a>
  </li>
</ul>
