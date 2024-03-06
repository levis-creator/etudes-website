<script lang="ts">
  import hero_image from "$lib/assets/building-exterior.webp(3).png";
</script>

<section id="landing">
  <div class="content-area">
    <p class="special-font">A commitment to innovation and sustainability</p>
    <p class="description">
      Etudes is a pioneering firm that seamlessly merges creativity and
      functionality to redefine architectural excellence.
    </p>
    <button> About us </button>
    <div class="image-area">
      <img src={hero_image} alt="hero item" />
    </div>
  </div>
</section>

<style lang="scss">
  @import "../styles/global.scss";
  #landing {
    background-color: $background-color1;
    padding-inline: 2em;
    .content-area {
      text-align: center;
      .special-font {
        font-weight: 400;
        font-size: 2.3em;
        padding-block: 1.5em;
      }
      p {
        padding-inline: 0.5em;
      }
      button {
        margin-block: 2em;
      }
      .image-area img {
        width: 100%;
        height: auto;
      }
      .image-area,
      img {
        border-radius: 0.5em;
      }
    }
  }
  @media (min-width: 1024px) {
    .special-font {
      padding-inline: 0;
    }
    .description {
      margin-inline: 25%;
    }
  }
</style>
