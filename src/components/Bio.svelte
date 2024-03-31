<script lang="ts">
  import Icon from "./Icon/Icon.svelte";
  import {constants} from "../lib/constants";
</script>

<section class="page-grid pt-20 pb-[140px]">
  <div class="col-start-2 col-span-5">
    <div class="flex justify-between">
      <h2 class="section-heading left-align text-white">Bio</h2>
      <ul class="flex gap-7">
        <li><label id="bio-short"><input type="radio" id="bio-short" name="bio" value="short" /> Short</label></li>
        <li><label id="bio-long"><input type="radio" id="bio-long" name="bio" value="long" /> Long</label></li>
        <li><label id="bio-emoji"><input type="radio" id="bio-emoji" name="bio" value="emoji" /> Emoji</label></li>
      </ul>
    </div>

    <p class="text-xl leading-loose">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div class="col-span-4 col-start-8">
    <img src="" alt="Head shot" class="mb-8" />
    <a href={constants.HEADSHOT} class="bg-selectiveYellow center rounded-md w-full text-lg gap-2 py-4 text-black font-medium">
      Download Head shot
      <Icon id="attachment" size={24} />
    </a>
  </div>
</section>