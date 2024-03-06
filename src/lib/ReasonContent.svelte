<script lang="ts">
  import type { Reason } from "./types";
  import showdown from "showdown";
  import { marked } from "marked";
  export let reasonContent: Reason;
  let converter = new showdown.Converter();
  let content = converter.makeHtml(reasonContent.content);
</script>

<div class="reason">
  <div class="content-area">
    <div class="head">
      <h3>*</h3>
    </div>
    {@html marked(reasonContent.content)}
  </div>
  <div class="content-image">
    <img src={reasonContent.contentImage} alt="reason visualization" />
  </div>
</div>

<style lang="scss">
  .reason {
    @media (min-width: 768px) {
      .head {
        text-align: left;
      }
    }
  }
  .head {
    font-size: 1em;
    text-align: center;
    margin-block: 1em;

    h3 {
      font-size: 2em;
    }
  }
  .content-image {
    width: 100%;
    img {
      width: 100%;
      height: auto;
      margin-block: 1.5em;
    }
  }
  .content-image,
  img {
    border-radius: 0.5em;
  }
</style>
