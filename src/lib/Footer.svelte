<script lang="ts">
  import { aboutlinks, privacyLinks, socialLinks } from "$lib";
  import logo from "./assets/logo.png";
</script>

<footer>
  <div class="brand-area">
    <img src={logo} alt="logo" />
    <p>
      Merging creativity and functionality to redefine architectural excellence
    </p>
  </div>
  <div class="links">
    <div>
      <h4>About</h4>
      <ul>
        {#each aboutlinks as about, i}
          <li>{about}</li>
        {/each}
      </ul>
    </div>
    <div>
      <h4>Social</h4>
      <ul>
        {#each socialLinks as social, i}
          <li>{social}</li>
        {/each}
      </ul>
    </div>
    <div>
      <h4>Privacy</h4>
      <ul>
        {#each privacyLinks as privacy, i}
          <li>{privacy}</li>
        {/each}
      </ul>
    </div>
  </div>
</footer>

<style lang="scss">
  @import "../styles/global.scss";
  footer {
    background-color: $background-color2;
    border: none;
    color: white;
    text-align: center;
    padding-inline: 3.5em;
    padding-block: 2em;
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      gap: 5em;
      .brand-area {
        width: 17em;
        margin-bottom: 0;
      }
    }
    @media (min-width: 1024px) {
      padding-inline: 5em;
    }
    @media (min-width: 1280px) {
      padding-inline: 10em;
    }

    .brand-area {
      margin-bottom: 3em;
      img {
        margin-bottom: 1em;
      }
      p {
        text-align: justify;
        margin-inline: 0.6em;
      }
    }
    .links {
      display: flex;
      gap: 2em;
      justify-content: space-between;
      text-align: left;

      h4 {
        font-weight: 500;
      }
      ul {
        list-style: none;
        text-align: left;
        list-style-position: inside;
        li {
          margin-block: 0.3em;
          font-size: 0.8em;
        }
      }
    }
  }
</style>
