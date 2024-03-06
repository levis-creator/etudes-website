<script>
  import { reasonContent, reasonHead } from "$lib";
  import ReasonContent from "./ReasonContent.svelte";
  import SectionHead from "./SectionHead.svelte";
</script>

<section id="reason">
  <SectionHead sectionHead={reasonHead} />
  <div class="reason-area">
    {#each reasonContent as reason}
      <ReasonContent reasonContent={reason} />
    {/each}
  </div>
</section>

<style lang="scss">
  @import "../styles/global.scss";
  #reason {
    background-color: $background-color1;
    @media (min-width: 1024px) {
      .reason-area {
        display: flex;
        gap: 2em;
      }
    }
  }
</style>
