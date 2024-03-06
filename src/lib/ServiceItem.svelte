<script lang="ts">
  import type { Service } from "./types";

  export let service: Service;
</script>

<div class="service-item">
  <h2>*</h2>
  <h3>{service.head}</h3>
  <p>
    {service.description}
  </p>
</div>

<style lang="scss">
  .service-item {
    text-align: center;
    margin-block: 1.4em;
    h3 {
      margin-block: 1em;
    }
  }
  @media (min-width: 768px) {
    .service-item {
      text-align: left;
    }
  }
</style>
