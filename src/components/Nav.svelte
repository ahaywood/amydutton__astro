<script type="ts">
  import SocialMedia from "./SocialMedia.svelte";
  import { fly } from "svelte/transition";

  let isNavShowing = false;
  const handleClick = () => {
    isNavShowing = !isNavShowing;
  };

  const closeNav = () => {
    isNavShowing = false;
  }

  // prevent scrolling if the nav is open
  $: {
    document.body.style.overflow = isNavShowing? "hidden" : "auto";
  }
</script>

<button
  on:click={handleClick}
  on:keydown={(e) => {
    if (e.key === "Escape") closeNav();
  }}
  class="fixed left-6 top-6 flex flex-col gap-3 group z-hamburger"
>
  <div
    class="w-14 h-[6px] block bg-armadillo group-hover:bg-selectiveYellow transition-transform duration-300 ease-in-out"
    class:bg-selectiveYellow={isNavShowing}
    class:rotate-45={isNavShowing}
    class:translate-y-[18px]={isNavShowing}
    />
  <div
    class="w-14 h-[6px] block bg-armadillo group-hover:bg-selectiveYellow transition-opacity duration-300 ease-in-out"
    class:opacity-0={isNavShowing}
    />
  <div
    class="w-14 h-[6px] block bg-armadillo group-hover:bg-selectiveYellow transition-transform duration-300 ease-in-out"
    class:bg-selectiveYellow={isNavShowing}
    class:-rotate-45={isNavShowing}
    class:-translate-y-[18px]={isNavShowing}
    />
</button>

{#if isNavShowing}
  <nav
    class="bg-onyx z-navigation w-screen h-screen fixed inset-0 page-grid pt-7"
    transition:fly={{ opacity: 0, y: "-100%" }}
    >
    <ul class="col-span-11 col-start-2">
      <li><a on:click={closeNav} href="/">Home</a></li>
      <li><a on:click={closeNav} href="/about">About</a></li>
      <li><a on:click={closeNav} href="/blog">Blog</a></li>
      <li><a on:click={closeNav} href="/portfolio">Portfolio</a></li>
      <li><a on:click={closeNav} href="/courses">Courses</a></li>
      <li><a on:click={closeNav} href="/speaking">Speaking</a></li>
      <li><a on:click={closeNav} href="/contact">Contact</a></li>
      <li><SocialMedia /></li>
    </ul>
  </nav>
{/if}
