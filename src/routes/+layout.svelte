<script>
  import Footer from "$lib/Footer.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import { fade } from "svelte/transition";
  import "../styles/global.scss";
  export let data;
</script>

{#key data.pathname}
  <div transition:fade>
    <Navbar />
    <slot />
    <Footer />
  </div>
{/key}
