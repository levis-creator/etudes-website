<script>
  import { gallery_data } from "$lib";
  import ArtDisplay from "./ArtDisplay.svelte";
</script>

<section id="projects">
  <h1 class="special-font">The Art Gallery</h1>
  <div>
    {#each gallery_data as gallery}
      <ArtDisplay {gallery} />
    {/each}
  </div>
</section>

<style lang="scss">
  @import "../styles/global.scss";
  #projects {
    background-color: $background-color1;
    h1 {
      text-align: center;
      font-weight: 500;
      padding-top: 1.5em;
    }
  }
</style>
