<script lang="ts">
  import type { SectionHead } from "./types";

  export let sectionHead: SectionHead;
</script>

<div class="section-head special-font">
  <div class="head">
    <h3>*</h3>
    <h2>{sectionHead.head}</h2>
  </div>
  <p>
    {sectionHead.description}
  </p>
</div>

<style lang="scss">
  .section-head {
    text-align: center;

    .head {
      font-size: 1em;
      h2 {
        font-weight: 400;
        margin-block: 1em;
      }
      h3 {
        font-size: 2em;
      }
    }
  }
</style>
