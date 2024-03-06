<script lang="ts">
  import logo from "$lib/assets/logo.png";
  function scrollIntoView({ target }: any) {
    const el = document.querySelector(target.getAttribute("href"));
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<nav>
  <div class="logo-area">
    <a href="/">
      <img src={logo} alt="logo" />
    </a>
  </div>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/gallery">Gallery</a>
    </li>
    <li>
      <a href="#service" on:click|preventDefault={scrollIntoView}>Services</a>
    </li>
  </ul>
</nav>

<style lang="scss">
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5em;
    .logo-area {
      margin-bottom: 2em;
    }
    ul {
      list-style: none;
      display: flex;
      gap: 2.5em;
      font-weight: 500;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-inline: 4.5em;
      .logo-area {
        margin-bottom: unset;
      }
      ul {
        font-size: 1.2em;
      }
    }
  }
  @media (min-width: 1280px) {
    nav {
      padding-inline: 10em;
    }
  }
</style>
