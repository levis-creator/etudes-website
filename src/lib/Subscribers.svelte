<section id="subscribers">
  <div class="container">
    <p class="special-font">Join 900+ subscribers</p>
    <p>Stay in the loop with everything you need to know.</p>
    <button> Sign up </button>
  </div>
</section>

<style lang="scss">
  @import "../styles/global.scss";
  #subscribers {
    background-image: url("./assets/bg-img.png");
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    background-color: black;
    .container {
      background-color: #fff;
      padding: 4em 3em;

      text-align: center;
      .special-font {
        font-size: 3em;
        margin-top: 0.7em;
        margin-bottom: 1.2em;
      }
      p {
        margin-bottom: 1.5em;
      }
    }
    @media (min-width: 768px) {
      .container {
        margin-inline: 4em;
      }
    }
  }
</style>
