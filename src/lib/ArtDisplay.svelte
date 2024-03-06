<script lang="ts">
  import { marked } from "marked";
  import type { Gallary } from "./types";

  export let gallery: Gallary;
</script>

<div class="gallery-display special-font">
  <div class="project-area">
    <div class="image-area">
      <p
        class:hiding={gallery.image_desc == undefined}
        class="image-description normal-font"
      >
        {gallery.image_desc}
      </p>
      <div class="image-container">
        <img src={gallery.image} alt="gallery display" />
      </div>
    </div>
    <!-- description -->
    <div class="description">
      {@html marked(gallery.description)}
    </div>
  </div>
  <div class="additional" class:hiding={gallery.additional_info == "nothing"}>
    {@html marked(gallery.additional_info)}
  </div>
</div>

<style lang="scss">
  .hiding {
    display: none;
  }
  .gallery-display {
    .image-container,
    img {
      width: 100%;
    }
    .image-container {
      padding-block: 1em;
    }
  }
  .additional {
    -webkit-columns: 250px 2;
    /* Chrome, Safari, Opera */
    -moz-columns: 250px 2;
    /* Firefox */
    columns: 250px 2;
    -webkit-column-gap: 2em;
    column-gap: 2em;
    -moz-column-gap: 2em;
  }
  .gallery-display {
    @media (min-width: 768px) {
      margin-block: 3em;
      .project-area {
        margin-block: 1em;
        display: flex;
        gap: 2em;
        .image-area {
          flex: 1;
        }
        .description {
          flex: 1;
        }
      }
    }
  }
</style>
